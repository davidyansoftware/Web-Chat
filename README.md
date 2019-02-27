# WebChat

A barebones implimentation of a server and client for web-based chatting. Messages that users send will be viewable by all users currently connected to the server. Uses socket.io to establish a connection and handle fallbacks.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

```
npm install
```

This will install all dependencies for this project:

Express - web framework for serving client to users

Socket.io - establish connection including fallbacks

### Usage

```
node server.js
```

Now you can visit http://localhost:8080 to open a client to send and receive messages.