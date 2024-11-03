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
        const chat = await Chat.create(req.body);
        res.status(201).json(chat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateChat = async (req, res) => {
    try {
        const chat = await Chat.findByPk(req.params.id);
        if (!chat) return res.status(404).json({ message: 'Chat not found' });
        await chat.update(req.body);
        res.json(chat);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteChat = async (req, res) => {
    try {
        const chat = await Chat.findByPk(req.params.id);
        if (!chat) return res.status(404).json({ message: 'Chat not found' });
        await chat.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
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
