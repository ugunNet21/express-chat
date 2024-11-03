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

### Running server nodemon

````
npm run dev

````

````
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
````


### Hit api

````
http://localhost:3000/api/chats/

````

### Response API

````
{
  "code": 200,
  "message": "Chats retrieved successfully",
  "data": [
    {
      "id": 1,
      "message": "Hello!",
      "sender": "User1",
      "createdAt": "2024-11-03T03:33:22.000Z",
      "updatedAt": "2024-11-03T03:33:22.000Z"
    },
    {
      "id": 2,
      "message": "Hi there!",
      "sender": "User2",
      "createdAt": "2024-11-03T03:33:22.000Z",
      "updatedAt": "2024-11-03T03:33:22.000Z"
    },
    {
      "id": 3,
      "message": "How are you?",
      "sender": "User1",
      "createdAt": "2024-11-03T03:33:22.000Z",
      "updatedAt": "2024-11-03T03:33:22.000Z"
    },
    {
      "id": 4,
      "message": "I am good, thanks!",
      "sender": "User2",
      "createdAt": "2024-11-03T03:33:22.000Z",
      "updatedAt": "2024-11-03T03:33:22.000Z"
    }
  ]
}


````
