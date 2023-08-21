import {Request,Response} from "express"
import { Banner } from "../../models/Banner"
import { NotFoundError } from "../../config"
const SingleBanner = async (req:Request,res:Response)=>{
const {id}  = req.params
const bannerDetails = await Banner.findById(id)

if(!bannerDetails){
    throw new NotFoundError()
}
res.status(200).json(bannerDetails)
}   

export {SingleBanner}