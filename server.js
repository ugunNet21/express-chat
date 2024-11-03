const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/chats', chatRoutes);

// Sync database
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(error => console.error('Unable to connect to the database:', error));
