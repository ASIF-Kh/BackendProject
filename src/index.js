// import 'dotenv/config';
import mongoose from "mongoose";
import express from "express";
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
  console.log("DB connection failed", error);
});
