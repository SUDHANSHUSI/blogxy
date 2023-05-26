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

app.all("*", (req, res, next) => {
  return next(
    new AppError(`can't find ${req.originalUrl} on this server!`, 404)
  );
});

app.use(errorFormatter);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}....`);
});
