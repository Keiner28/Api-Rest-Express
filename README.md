# API REST with Express and MongoDB

This project is the backend of a movie management application. It provides a RESTful API to interact with a MongoDB database, allowing for the creation, reading, updating, and deletion of movie-related information. It is developed with **Node.js** and **Express**, following a modular structure to organize controllers, models, routes, and utilities.

## Main Features

- **Movie CRUD**: Create, read, update, and delete movies from the database.
- **Schema Validation**: Validate incoming data using `Zod`.
- **Error Handling**: Centralized error management.
- **CORS Handling**: Allow cross-domain requests.

## Technologies Used

- **Node.js**: Runtime environment for building the server.
- **Express.js**: Minimal and flexible server framework.
- **MongoDB/Mongoose**: NoSQL database and ORM for MongoDB interaction.
- **Zod**: Schema validation library.
- **Dotenv**: Manage environment variables.
- **Cors**: Allow cross-domain requests.

## Project Structure

The project is organized in a modular fashion, following best practices for scalable application code organization.

```bash
├── controllers/              # API logic controllers
│   └── movies.js             # Movies controller
├── models/                   # Data models
│   ├── mongodb/              # Models for MongoDB
│   │   └── movie.js          # Movie model for MongoDB
│   ├── local-file-system/    # Models for local file system
│   │   └── movie.js          # Movie model for the local file system
├── middlewares/              # Custom middlewares
│   └── authMiddleware.js     # Authentication middleware
├── routes/                   # API route definitions
│   └── movieRoutes.js        # Movie management routes
├── schemes/                  # Schema validations
│   └── movieScheme.js        # Movie schema validation with Zod
├── utils/                    # Reusable utilities
│   └── errorHandler.js       # Centralized error handling
├── api.http                  # HTTP testing file for tools like VSCode REST Client or Thunder Client
├── app.js                    # Application entry point
├── config.js                 # Database connection configuration and other settings
├── movies.json               # JSON file with initial or example movie data
├── .env                      # Environment variable configuration file (MONGO_URI, PORT)
└── package.json              # Project dependencies and configuration scripts
```

## Environment Variables

The `.env` file contains the following environment variables needed for the backend to run correctly:

```bash
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/movies
PORT=3000
```

## Installation and Execution

1. Clone the repository:

   ```bash
   git clone https://github.com/Keiner28/api-rest-express-deploy.git
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the project root with the required variables:

   ```bash
   MONGO_URI=<your-mongo-uri>
   PORT=3000
   ```

4. Run the application in development mode:

   ```bash
   pnpm run dev
   ```

5. The API will be available at `http://localhost:3000`.

## API Endpoints

| Method | Endpoint      | Description                 |
| ------ | ------------- | --------------------------- |
| GET    | `/movies`     | Retrieves all movies        |
| GET    | `/movies/:id` | Retrieves a movie by its ID |
| POST   | `/movies`     | Creates a new movie         |
| PATCH  | `/movies/:id` | Updates an existing movie   |
| DELETE | `/movies/:id` | Deletes a movie by its ID   |

## Contact

- **Email**: [keinergodinez@gmail.com](mailto:keinergodinez@gmail.com)
- **LinkedIn**: [Keiner Godinez](https://www.linkedin.com/in/keiner28/)
