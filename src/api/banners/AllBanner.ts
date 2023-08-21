import {Request,Response} from "express"
import { Banner } from "../../models/Banner"

const AllBanners = async (req:Request,res:Response)=>{
   const allBanners = await Banner.find() ;
   res.status(200).json(allBanners)
}

export {AllBanners}