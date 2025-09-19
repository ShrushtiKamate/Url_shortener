import express from "express";
import dotenv from "dotenv"
dotenv.config("./.env")
import connectDB from "./src/config/mongo.config.js";
import shortUrl from "./src/routes/shorturl.route.js";
import { errorHandler } from "./src/utils/errorhandler.js";
import { redirectFromShortUrl } from "./src/controller/shorturl.controller.js";
import auth_routes from "./src/routes/auth.routes.js"
import cors from "cors";


const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/auth",auth_routes)
app.use("/api/create",shortUrl)


app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)
app.listen(3000,()=>{
    connectDB();
    console.log("Running on http://localhost:3000");
})

//GET - redirection
//POST - create short url