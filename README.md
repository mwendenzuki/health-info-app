# Health Information System API

## Overview

This is a basic health information system backend built with Node.js and Express.js.  
It allows doctors to:

- Create health programs (e.g., TB, Malaria, HIV)
- Register new clients
- Enroll clients into programs
- View and search client profiles
- Expose client profiles via an API

---

## Technologies Used

- Node.js
- Express.js
- JavaScript (ES6)

---

## How to Run

1. Clone the repository:
   git clone <your-repo-link> cd health-system-app

2. Install dependencies:
   npm install

3. Start the server:
   node app.js

4. Server will run at:
   http://localhost:3000

---

## API Endpoints

| Method | Endpoint       | Description                    |
| :----- | :------------- | :----------------------------- |
| POST   | `/programs`    | Create a new health program    |
| POST   | `/clients`     | Register a new client          |
| POST   | `/enrollments` | Enroll a client into a program |
| GET    | `/clients`     | Get all registered clients     |
| GET    | `/clients/:id` | Get a single client's profile  |

---

## Author

- Ruth Nzuki.
