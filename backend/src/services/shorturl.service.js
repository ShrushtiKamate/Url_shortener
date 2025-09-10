import urlSchema from "../src/models/shorturl.model.js"
import { generatenanoid } from "../utils/helper.js";
export const createshorturlservice = async (url)=>{
    const shortUrl = await generatenanoid(7);
        const newUrl = new urlSchema({
            full_url:url,
            short_url:shortUrl
        })
        newUrl.save();
        return shortUrl;
};
