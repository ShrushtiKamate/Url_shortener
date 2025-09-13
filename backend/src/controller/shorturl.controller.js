import { createShortUrlWithoutUser  } from "../services/shorturl.service.js";
import { generatenanoid } from "../utils/helper.js";
//import {urlSchema} from "../models/shorturl.model.js" 
import { getshortUrl } from "../doa/shorturl.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createshorturl = wrapAsync( async(req,res,)=>{
    
         const {url} = req.body;
        const shortUrl = await createShortUrlWithoutUser (url);
        res.status(200).json(process.env.APP_URL + shortUrl);
   
});

export const redirectFromShortUrl =  wrapAsync(async(req,res,next)=>{
        const {id} = req.params
        const url = await getshortUrl(id)
        if(!url) throw new Error("Short URL not found")
            res.redirect(url.full_url)
    
}) 