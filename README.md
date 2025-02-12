## Backend Explanation

This backend project is built using Node.js and Express.js. It provides an API endpoint to review code snippets using Google's Generative AI model.

## Project Structure

```
Backend/
    .env
    package.json
    server.js
    src/
        app.js
        controllers/
            ai.controller.js
        routes/
            ai.routes.js
        services/
            ai.service.js
```

## Installation

1. Clone the repository.
2. Navigate to the Backend directory.
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a .env file with your Google Gemini API key:
   ```properties
   GOOGLE_GEMINI_API_KEY=your_api_key_here
   ```

## Running the Server

Start the server:
```sh
npm start
```
The server will listen on port 3000.

## Routes

### POST /ai/get-review

- **Description**: This endpoint accepts a code snippet and returns a review.
- **Request Body**: JSON object with a `code` key.
- **Response**: A detailed review of the provided code snippet.

## Packages and Functions

### Dependencies

- **express**: A web framework for Node.js to create the server and handle routing.
- **cors**: Middleware to enable Cross-Origin Resource Sharing, allowing the frontend to communicate with the backend.
- **dotenv**: Loads environment variables from a .env file into `process.env`.
- **@google/generative-ai**: A package to interact with Google's Generative AI models.

### Files and Functions

- **server.js**: Entry point of the application. It loads environment variables and starts the server.
- **src/app.js**: Sets up the Express application, including middleware and routes.
- **src/routes/ai.routes.js**: Defines the `/ai/get-review` route and links it to the controller.
- **src/controllers/ai.controller.js**: Handles the logic for the `/get-review` endpoint. It validates the request and calls the service to get the review.
- **src/services/ai.service.js**: Interacts with the Google Generative AI model to generate the code review.

## Usage

1. Send a POST request to `http://localhost:3000/ai/get-review` with a JSON body containing the `code` key.
2. Receive a detailed review of the provided code snippet.

Example request:
```json
{
  "code": "function sum(a, b) { return a + b; }"
}
```

Example response:
```json
{
  "review": "..."
}
```

This backend service leverages Google's Generative AI to provide insightful code reviews, ensuring code quality, best practices, and performance optimizations.

## Frontend Explanation

This frontend project is built using React. It provides a user interface to input code snippets and receive reviews from the backend service.

## Project Structure

```
Frontend/
    src/
        App.jsx
        App.css
        index.js
```

## Installation

1. Clone the repository.
2. Navigate to the Frontend directory.
3. Install dependencies:
   ```sh
   npm install
   ```

## Running the Application

Start the development server:
```sh
npm start
```
The application will be available at `http://localhost:3000`.

## Packages and Functions

### Dependencies

- **react**: A JavaScript library for building user interfaces.
- **axios**: A promise-based HTTP client for making requests to the backend.
- **prismjs**: A lightweight, extensible syntax highlighter.
- **react-simple-code-editor**: A simple code editor with syntax highlighting.
- **react-markdown**: A React component to render Markdown.
- **rehype-highlight**: A plugin to highlight code blocks in Markdown.
- **highlight.js**: A syntax highlighter for code blocks.

### Files and Functions

- **App.jsx**: The main component of the application.
  - **useState**: React hook to manage state for `code` and `review`.
  - **useEffect**: React hook to run side effects, used here to initialize syntax highlighting.
  - **reviewCode**: An asynchronous function to send the code to the backend and set the review response.
  - **Editor**: A code editor component with syntax highlighting.
  - **Markdown**: A component to render the review in Markdown format.

### Components

- **Editor**: Allows users to input and edit code snippets.
- **Markdown**: Displays the review in a readable format with syntax highlighting.

## Usage

1. Enter the code you want to review in the editor on the left side of the screen.
2. Click the "Review" button to send the code to the backend.
3. The review will be displayed on the right side of the screen.

This frontend application provides an intuitive interface for users to input code and receive detailed reviews, leveraging the backend service for analysis.