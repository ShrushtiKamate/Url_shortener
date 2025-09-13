import express from "express";
const app = express();
import dotenv from "dotenv"
dotenv.config("./.env")
import {nanoid} from "nanoid";
import connectDB from "./src/config/mongo.config.js";
import shortUrl from "./src/routes/shorturl.route.js";

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/create",shortUrl)

app.get("/:id",async(req,res)=>{
    const {id} = req.params
    const url = await urlSchema.findOne({short_url :id})
    if(url){
        res.redirect(url.full_url)
    }
    else{
        res.status(404).send("Not found")
    }
})
app.listen(3000,()=>{
    connectDB();
    console.log("Running on http://localhost:3000");
})

//GET - redirection
//POST - create short url