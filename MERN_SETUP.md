## CREATE PROJECT FOLDER 
```
mkdir <proj_name>
```

## CREATE FRONTEND AND BACKEND FOLDERS 
```
mkdir client
```
```
mkdir server
```

## CREATE packge.json FOLDER
```
npm init -y
```

## INSTALL PACKAGES:
### 1. EXPRESS  
Helps in creating server  

```
npm i express
```

### 2. MONGOOSE
mongoose is an ODM (Object Data Modeling) library for MongoDB, making it easy to interact with databases using schemas.
```
npm install mongoose
```

### 3. COOKIE-PARSER 
 Parses cookies attached to the client request and makes them easily accessible in req.cookies. It is commonly used when dealing with user authentication, sessions, or tracking user preferences.

```
npm i cookie-parser
```

### 4. RESEND 
It is a Node.js package used to send emails via the Resend API, a service for sending transactional emails

```
npm install resend
```

### 5. BYCRPT
It is a library used for hashing passwords securely. It helps protect user credentials by making it difficult for attackers to reverse-engineer passwords even if they gain access to the hashed data.

```
npm install bycrptjs
```

### 6. JWT
jsonwebtoken (JWT) is used for authentication by generating and verifying secure tokens. It helps in securing APIs and managing user sessions.
```
npm i jsonwebtoken
```

### 7. DOTENV
dotenv loads environment variables from a .env file into process.env. It helps keep sensitive data (API keys, database URLs) secure and out of source code.
```
npm install dotenv
```
### .env should always be placed in backend folder

## UPDATE package.json FILE:
ADD THIS TO SCRIPTS:
```
"dev":"nodemon server/index.js",
```

UPDATE MAIN:
```
"main": "server index.js",
```

SET TYPE TO MODULE
```
"type" : "module"
```

## package.json eg:
```
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev":"nodemon server/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "mongoose": "^8.12.1"
  }
}

```
