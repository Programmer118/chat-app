# Chat App

A real-time chat application built with modern web technologies, allowing users to create conversations and exchange messages in a dynamic and engaging environment.

## Features

- **User Authentication**: Secure sign-up and login for users.
- **Real-time Messaging**: Seamless communication with real-time message delivery.
- **Conversations**: Users can create and join conversations.
- **Media Sharing**: Share images and files in the chat.
- **Typing Indicators**: See when another user is typing in real time.
- **Read Receipts**: Get notified when your messages are read.
- **Responsive Design**: Optimized for both mobile and desktop use.

## Tech Stack

### Frontend

- **React** with Hooks for managing UI and state
- **Tailwind CSS** for styling the application
- **WebSocket** for real-time communication between users
- **GSAP (GreenSock Animation Platform)** for smooth animations
- **React Hot Toast** for notifications

### Backend

- **Node.js** with **Express** for handling API requests
- **MongoDB** with **Mongoose** for storing user and conversation data
- **WebSocket** for enabling real-time communication between the server and connected clients
- **JWT (JSON Web Tokens)** for secure user authentication
- **Multer** for file handling and media uploads

## Installation

Follow these steps to run the project locally:

### 1. Clone the repository

git clone https://github.com/Programmer118/chat-app.git
cd chat-app

2. Install dependencies

Frontend
cd client
npm install

Backend
cd ../server
npm install

3. Setup environment variables
Create a .env file in the server folder and add the following variables:
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret

Replace your-mongodb-uri and your-jwt-secret with your actual MongoDB connection URI and JWT secret key.

4. Run the application
Frontend
cd client
npm start

This will run the React frontend at http://localhost:3000.

Backend
cd ../server
npm run dev


Here is the code for the README.md file:

markdown
Copy code
# Chat App

A real-time chat application built with modern web technologies, allowing users to create conversations and exchange messages in a dynamic and engaging environment.

## Features

- **User Authentication**: Secure sign-up and login for users.
- **Real-time Messaging**: Seamless communication with real-time message delivery.
- **Conversations**: Users can create and join conversations.
- **Media Sharing**: Share images and files in the chat.
- **Typing Indicators**: See when another user is typing in real time.
- **Read Receipts**: Get notified when your messages are read.
- **Responsive Design**: Optimized for both mobile and desktop use.

## Tech Stack

### Frontend

- **React** with Hooks for managing UI and state
- **Tailwind CSS** for styling the application
- **WebSocket** for real-time communication between users
- **GSAP (GreenSock Animation Platform)** for smooth animations
- **React Hot Toast** for notifications

### Backend

- **Node.js** with **Express** for handling API requests
- **MongoDB** with **Mongoose** for storing user and conversation data
- **WebSocket** for enabling real-time communication between the server and connected clients
- **JWT (JSON Web Tokens)** for secure user authentication
- **Multer** for file handling and media uploads

## Installation

Follow these steps to run the project locally:

### 1. Clone the repository


git clone https://github.com/Programmer118/chat-app.git
cd chat-app
2. Install dependencies
Frontend
bash
Copy code
cd client
npm install
Backend
bash
Copy code
cd ../server
npm install
3. Setup environment variables
Create a .env file in the server folder and add the following variables:

makefile
Copy code
PORT=5000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
Replace your-mongodb-uri and your-jwt-secret with your actual MongoDB connection URI and JWT secret key.

4. Run the application
Frontend
bash
Copy code
cd client
npm start
This will run the React frontend at http://localhost:3000.

Backend
bash
Copy code
cd ../server
npm run dev
The Node.js server will run on http://localhost:5000.

5. Build for production
To build the frontend for production, run the following command in the client directory:
npm run build

This will create an optimized build of the React app in the build folder.

Usage
- Sign Up: Create a new account with a username and password.
- Login: Access your account using the registered credentials.
- Conversations: Create new conversations, select from the list of available users, and start chatting.
- Messages: Send and receive messages instantly with real-time updates.
- Media: Upload images and files to share with others in the chat.

Contributing
Contributions are welcome! If you'd like to contribute, please open an issue or submit a pull request.

    1. Fork the repository.
    2. Create a new branch for your feature or bugfix.
    3. Submit a pull request for review.

License
This project is licensed under the MIT License. See the LICENSE file for more details.
