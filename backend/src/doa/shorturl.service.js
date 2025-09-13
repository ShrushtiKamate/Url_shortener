import urlSchema from "../models/shorturl.model.js"
export const saveShorturl = async (shorturl,longurl,userId)=>{
    try{
         const newurl = new urlSchema({
        full_url :longurl,
        short_url:shorturl
        })
        if(userId){
                newurl.user = userId
        }
        await newurl.save()
    }
    catch(err){
        throw new Error(err);
    }
   
};

export const getshortUrl = async (shortUrl) =>{
    return await urlSchema.findOneAndUpdate({short_url:shortUrl},{$inc :{clicks:1}})
} 