# Ask.it

Ministriy of programming task

# Server and Client

Server is being deployed on heroku and Heroku
is hosting our database as well as our backend node.js code.

Client is being deployed on Netlify and it is fetching requests to
our backend on heroku.

Both server and client are connected to this github repo and any changes
instantly take place when pushed.

# How to run locally?

### Running locally requires quite a lot of setup

---

### Requirements:

- Node.js
- Postgres - Pg Admin

### How to run:

- cd client
- npm install
- Go back to root folder
- cd server
- npm install
- run "pg:psql" to open postgres from terminal
- run "CREATE EXTENSION "uuid-ossp";" to create uuid-ossp extension
- copy & paste first 4 commands from database.sql to pgAdmin query tool
- You will also have to install nodemon globally - "npm install -g nodemon"
- In server folder run: "nodemon index"
- In client folder run: "npm start"

### Deployment:

- This project is deployed on Heroku and Netlify.
- Heroku is used for database and node.js code and Netlify for the front-end.
