## Struktur Project

````

chat-app/
├── config/
│   └── database.js
├── controllers/
│   └── chatController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── Chat.js
├── routes/
│   └── chatRoutes.js
├── .env
├── package.json
├── server.js
└── README.md

````

## Create folder Project

````
mkdir chat-app
cd chat-app
npm init -y

````

## Create Project

````
npm install express mysql2 sequelize cors dotenv

````

## Running Server

````
node server.js

````
