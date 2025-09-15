// const express = require('express');
import express from "express";
import dotenv from 'dotenv';
dotenv.config();

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
 
app.listen(PORT, () => {
    console.log(`Server up on port: ${PORT}`);
})