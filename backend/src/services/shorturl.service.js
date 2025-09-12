import urlSchema from "../models/shorturl.model.js"
import { generatenanoid } from "../utils/helper.js";
import { saveShorturl } from "../doa/shorturl.service.js";
export const createShortUrlWithoutUser = async (url)=>{
    const shortUrl = await generatenanoid(7);
    await saveShorturl(shortUrl,url); 
     return shortUrl;
};
export const createShortUrlWithUser = async (url,userId,slug=null) => {
    const shortUrl = await  generateNanoId(7)
    await saveShorturl(url,shortUrl,userId)
    return shortUrl
}
