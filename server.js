const app = require("./app");
const connectDatabase = require('./db/Database');
// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// connect db
connectDatabase();

// create server
const server = app.listen(process.env.PORT, ()=>{
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`
  );
});

