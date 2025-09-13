import { createShortUrlWithoutUser  } from "../services/shorturl.service.js";
import { generatenanoid } from "../utils/helper.js";

export const createshorturl = async(req,res)=>{
    const {url} = req.body;
    const shortUrl = await createShortUrlWithoutUser (url);
    res.send(process.env.APP_URL + shortUrl);
};