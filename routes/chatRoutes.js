const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/', chatController.getAllChats); // Akan mengarah ke /api/chats
router.post('/', chatController.createChat); 
router.put('/:id', chatController.updateChat); 
router.patch('/:id', chatController.updateChat); 
router.get('/:id', chatController.getChatById); // Mengarah ke /api/chats/:id
router.delete('/:id', chatController.deleteChat); 
router.post('/dummy', chatController.insertDummyData); // Akan mengarah ke /api/chats/dummy

module.exports = router;
