import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import routes from "./routes/index.js"

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong";
    return res.status(errorStatus).json(errorMessage);
});

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log("Connected to database")
    } catch (error) {
        console.log(error);
    }
}

app.listen(PORT, () => {
    connect();
    console.log(`Backend server started on ${PORT}`)
})