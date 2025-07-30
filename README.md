# Sam's GPT - A ChatGPT Clone

This is a web-based chat application that leverages the OpenAI API to provide intelligent, human-like conversations. It features a clean user interface built with React and a robust backend powered by Node.js and Express to manage chat history in a MongoDB database.

-----

## \#\# Features

  * **Real-time AI Chat:** Instant responses from OpenAI's `gpt-4o-mini` model.
  * **Conversation History:** Chats are automatically saved and organized into threads.
  * **Persistent Storage:** MongoDB database stores all conversations for returning users.
  * **Intuitive UI:** Simple and clean interface for creating, viewing, and deleting chats.
  * **RESTful API:** A well-structured backend API to handle all application logic.

-----

## \#\# Tech Stack

  * **Frontend:** React, Vite
  * **Backend:** Node.js, Express.js
  * **Database:** MongoDB with Mongoose
  * **AI:** OpenAI API

-----

## \#\# Setup and Installation

To get this project running on your local machine, follow these steps.

### \#\#\# Prerequisites

  * [Node.js](https://www.google.com/search?q=httpss://nodejs.org/) installed
  * [Git](https://www.google.com/search?q=httpss://git-scm.com/) installed
  * A **MongoDB Atlas** account for the database URI.
  * An **OpenAI API** key.

### \#\#\# 1. Clone the Repository

```bash
git clone https://github.com/samanyuxkaushal/samgpt.git
cd samgpt
```

### \#\#\# 2. Backend Setup

First, set up and run the backend server.

1.  Navigate to the backend directory:
    ```bash
    cd Backend
    ```
2.  Install the required dependencies:
    ```bash
    npm install
    ```
3.  Create an environment file named `.env` in the `Backend` folder. See the section below for the required variables.
4.  Start the backend server:
    ```bash
    npm run dev
    ```
    The server should now be running on `http://localhost:8080`.

### \#\#\# 3. Frontend Setup

Open a **new terminal** and set up the frontend.

1.  Navigate to the frontend directory from the project root:
    ```bash
    cd Frontend
    ```
2.  Install the required dependencies:
    ```bash
    npm install
    ```
3.  Start the frontend development server:
    ```bash
    npm run dev
    ```
    The application should now be open and running in your browser, typically at `http://localhost:5173`.

-----

## \#\# Environment Variables

To run the backend, you must create a `.env` file in the `/Backend` directory and add the following variables:

```text
# .env

# Your secret key from the OpenAI platform
OPENAI_API_KEY=sk-YourSecretOpenAI_KeyGoesHere

# Your connection string from MongoDB Atlas
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database_name
```

-----

## \#\# Screenshots

<img width="2879" height="1458" alt="image" src="https://github.com/user-attachments/assets/6f42ab66-870d-4003-bba3-ba92798d5d06" />
<img width="2877" height="1458" alt="image" src="https://github.com/user-attachments/assets/9e2963bd-576e-47ca-82a6-796e2001e694" />
<img width="2879" height="1454" alt="image" src="https://github.com/user-attachments/assets/22787460-a2f9-4cb9-8442-142c8a6b1eb9" />


Thank You!!


