const Chat = require('../models/Chat');

exports.getAllChats = async (req, res) => {
    try {
        const chats = await Chat.findAll();
        res.json(chats);
    } catch (error) {
        res.status(500).json({ message: error.message });
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
