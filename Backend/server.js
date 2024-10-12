// const express = require('express')
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { RegisterModel } from "../src/models/registerSchema.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
const app = express();
const port = 3000;

const jwtSecret = "lasd4831231#^";

// db connection
mongoose.connect("mongodb://127.0.0.1:27017/milkontheway");

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
        methods: ["GET", "POST"],
    })
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/createaccount", async (req, res) => {
    const {
        firstname,
        lastname,
        email,
        phone,
        password,
        confirmpassword,
        address,
        isVendor,
        work,
    } = req.body;

    const existingUser = await RegisterModel.findOne({ email });
    if (existingUser) {
        res.status(200).send({ success: false, msg: "User already exists" });
        return;
    }
    //  code for encryption
    try {
        const createUser = await RegisterModel.create({
            firstname,
            lastname,
            email,
            phone,
            password,
            confirmpassword,
            address,
            isVendor,
            work,
        });
        const token = jwt.sign(
            {
                username: firstname + " " + lastname,
                email: email,
                isVendor: isVendor,
            },
            jwtSecret,
            {
                expiresIn: "2 days",
            }
        );

        console.log(createUser);
        res.cookie("token", token).send({
            success: true,
            msg: "Account Created Successfully",
            user: createUser,
        });
    } catch (error) {
        res.status(400).json({ success: false, error: error });
        console.log(error);
    }
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

    const findUser = await RegisterModel.findOne({ email });
    if (!findUser) {
        res.send({ success: false, msg: "User not found" });
    }

    if (findUser.password === password) {
        const token = jwt.sign(
            {
                email: email,
                username: findUser.firstname + " " + findUser.lastname,
                isVendor: findUser.isVendor,
            },
            jwtSecret,
            {
                expiresIn: "2 days",
            }
        );
        console.log(token);
        res.cookie("token", token, {
            httpOnly: true,
        }).send({
            success: true,
            msg: "Login Successful",
            token: token,
        });
    } else {
        res.send({ success: false, msg: "Incorrect Password" });
    }
});

app.get("/profile", (req, res) => {
    console.log("the cookie is ");

    const { token } = req.cookies;
    console.log("the user token is", token);
    if (token) {
        jwt.verify(token, jwtSecret, (err, user) => {
            if (err) {
                return res.status(403).json({
                    success: false,
                    msg: "Failed to authenticate token",
                });
            }
            console.log("the user is", user);
            console.log("successfully completed...");
            res.json(user);
        });
    } else {
        res.json(null);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
