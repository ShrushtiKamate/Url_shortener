import urlSchema from "../models/shorturl.model.js"
export const saveShorturl = async (shorturl,longurl,userId)=>{
    const newurl = new urlSchema({
        full_url :longurl,
        short_url:shorturl
    })
    if(userId){
            newurl.user = userId
    }
    newurl.save()
};