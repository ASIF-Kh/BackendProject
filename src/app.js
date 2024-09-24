import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express(cors({
    origin: process.env.corsOrigin,
    credentials: true //need to look into this
}));

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

export {app};