const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const app = express();
const AppError = require("./utils/appError");
const userRoutes = require("./routes/userRoutes");
const errorFormatter = require("./ErrorHandler/errorFormatter");
const dbConnect = require("./config/dbConnect");

// Parse JSON request body
app.use(express.json());

dbConnect();


app.use("/api", userRoutes);


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
  next();
});


app.all("*", (req, res, next) => {
  return next(
    new AppError(`can't find ${req.originalUrl} on this server!`, 404)
  );
});

app.use(errorFormatter);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}....`);
});
