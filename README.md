# Grocery List Application

This is a simple web application that allows you to create, read, update, and delete grocery lists. The application is built using Node.js, Express, MongoDB Atlas, and EJS templating engine.

## Features

- Create a new grocery list with a title and optional description.
- View a list of all existing grocery lists.
- View the details of a specific grocery list, including the items in the list.
- Add new items to a grocery list.
- Edit the title, description, or items of a grocery list.
- Delete a grocery list or remove specific items from a list.

## Prerequisites

Before running the application, make sure you have the following software installed on your machine:

- Node.js (version 12 or above)
- MongoDB Atlas account (or a locally running MongoDB server)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/gvasquez11/grocery-list
```

2. Install the dependencies by running the following command in the project directory:

```bash
npm init
npm install express --save
npm install mongodb --save
npm install ejs --save
npm instal dotenv --save
```

3. Create a `.env` file in the root directory and add the following environment variables:

```bash
DB_STRING=<your-mongodb-string>
```

Replace `<your-mongodb-string>` with the connection STRING for your MongoDB Atlas database or your local MongoDB server.

4. Start the application:

```bash
node server.js
```

5. Open your browser and visit `http://localhost:8000` to access the grocery list application.

- To launch using a different port open the server.js file and change PORT value to whatever port you would like.

## Application Structure

- `server.js`: Entry point of the application. Sets up the Express server and routes.
- `views/`: Contains the EJS templates for rendering HTML views.
- `public/`: Static assets such as CSS and client-side JavaScript files.

## Technologies Used

- [Node.js](https://nodejs.org/): A JavaScript runtime environment that executes JavaScript code outside of a browser.
- [Express](https://expressjs.com/): A fast and minimalist web application framework for Node.js.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): A fully-managed cloud database service that integrates with MongoDB.
- [EJS](https://ejs.co/): A simple yet powerful JavaScript templating language for generating HTML markup.

## Contributing

Contributions are welcome! If you find any issues or want to contribute to the project, feel free to open a pull request.

---

Happy grocery shopping!
