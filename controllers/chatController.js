const Chat = require('../models/Chat');

exports.getAllChats = async (req, res) => {
    try {
        const chats = await Chat.findAll();
        const chatData = chats.map(chat => chat.dataValues);

        // Mengubah format respons
        res.json({
            code: 200,
            message: 'Chats retrieved successfully',
            data: chatData
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            code: 500,
            message: error.message,
            data: null
        });
    }
};

exports.createChat = async (req, res) => {
    try {
        // Pastikan req.body memiliki data yang diperlukan
        const { message, sender } = req.body;

        // Validasi data yang diterima
        if (!message || !sender) {
            return res.status(400).json({
                code: 400,
                message: 'Message and sender are required',
                data: null
            });
        }

        // Buat chat baru
        const chat = await Chat.create({ message, sender });

        // Respons dengan format yang diinginkan
        res.status(201).json({
            code: 201,
            message: 'Chat created successfully',
            data: chat
        });
    } catch (error) {
        // Menangani kesalahan
        res.status(500).json({
            code: 500,
            message: error.message,
            data: null
        });
    }
};

exports.updateChat = async (req, res) => {
    try {
        const chat = await Chat.findByPk(req.params.id);
        if (!chat) {
            return res.status(404).json({
                code: 404,
                message: 'Chat not found',
                data: null
            });
        }
        const { message, sender } = req.body;
        await chat.update({ message, sender }); // Update fields based on request body
        res.json({
            code: 200,
            message: 'Chat updated successfully',
            data: chat
        });
    } catch (error) {
        res.status(400).json({
            code: 400,
            message: error.message,
            data: null
        });
    }
};

exports.getChatById = async (req, res) => {
    try {
        const chat = await Chat.findByPk(req.params.id);
        if (!chat) {
            return res.status(404).json({
                code: 404,
                message: 'Chat not found',
                data: null
            });
        }

        res.json({
            code: 200,
            message: 'Chat retrieved successfully',
            data: chat.dataValues
        });
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message,
            data: null
        });
    }
};


exports.deleteChat = async (req, res) => {
    try {
        const chat = await Chat.findByPk(req.params.id);
        if (!chat) {
            return res.status(404).json({
                code: 404,
                message: 'Chat not found',
                data: null
            });
        }
        await chat.destroy();
        res.status(204).send(); // No content to send back
    } catch (error) {
        res.status(500).json({
            code: 500,
            message: error.message,
            data: null
        });
    }
};

exports.insertDummyData = async (req, res) => {
    try {
        const dummyChats = [
            { message: 'Hello!', sender: 'User1' },
            { message: 'Hi there!', sender: 'User2' },
            { message: 'How are you?', sender: 'User1' },
            { message: 'I am good, thanks!', sender: 'User2' }
        ];

        const createdChats = await Chat.bulkCreate(dummyChats);
        res.status(201).json(createdChats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
