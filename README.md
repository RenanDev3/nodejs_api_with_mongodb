# Node.js API with MongoDB

This is a small application aimed at testing the Node.js and MongoDB stack.

## Installation

Before running the application, ensure you have Node.js.

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies using npm:

```bash
npm install
```

## Configuration
Before running the application, you need to set up your .env file with the required environment variables. Here's how to do it:

1. Create a file named .env in the root directory of your project.
2. Add the following content to the .env file:
```bash
MONGODB_USER='your for MongoDB'
MONGODB_SECRET='your password for MongoDB'
MONGODB_CONN='your connection string for MongoDB'
API_PORT=3000
```

## Usage
### Development Mode

To run the application in development mode, use the following command:

```bash
npm run dev
```

This command will start the server using Nodemon, which will automatically restart the server whenever changes are detected in your files. This is useful for development as it provides a streamlined workflow.

### Production Mode

To run the application in production mode, use the following command:

```bash
npm start
```
