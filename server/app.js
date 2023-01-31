const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const chats = require("./data/data");
const userRouter = require("./routers/userRouter");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const app = express();
dotenv.config();

//* db
connectDB();

//* middlewares
app.use(express.json());

//* routes
app.use("/api/user", userRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`server started on ${PORT}`));
