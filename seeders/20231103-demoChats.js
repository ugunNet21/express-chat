const { Chat } = require('../models');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Chat.bulkCreate([
            { message: 'Hello World!', sender: 'User1' },
            { message: 'Hi there!', sender: 'User2' },
            { message: 'How are you?', sender: 'User1' },
            { message: 'I am good, thanks!', sender: 'User2' }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await Chat.destroy({
            where: {
                sender: ['User1', 'User2']
            }
        });
    }
};
