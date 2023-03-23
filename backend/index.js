import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import User_route from "./routes/User_route.js";

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/belajar', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', (e) => console.log(e));
db.once('open', () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(User_route);

app.listen(5000, () => console.log("Server Running..."));