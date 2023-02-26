const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');

// Config
dotenv.config({path: "backend/config/config.env"});

// Connect to the database
connectDatabase();






app.listen(process.env.PORT, () => {
  console.log(`server started at: http://localhost:${process.env.PORT}`);
});
