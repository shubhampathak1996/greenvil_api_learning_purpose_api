import {Request,Response} from "express"
import { Banner } from "../../models/Banner"

const AddBanner = async (req:Request,res:Response)=>{
    const {title,image,link} =req.body

    const newBanner = Banner.build({
        title,image,link   
    })
    await newBanner.save();
    res.status(201).json(newBanner);


}

export {AddBanner}