import User from "../models/usermodel.js"

export const findUserByEmail = async(email) =>{
    return await User.findOne({email})
}