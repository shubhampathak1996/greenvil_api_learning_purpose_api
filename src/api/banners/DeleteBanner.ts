import {Request,Response} from "express"
import { Banner } from "../../models/Banner";
import { NotFoundError } from "../../config";

const DeleteBanner = async (req:Request,res:Response)=>{
const {id} =req.params;
const bannerDetails = await Banner.findById(id)
if(!bannerDetails){
    throw new NotFoundError()
}
await bannerDetails.remove()
res.status(202).send("Record Deleted")
}
export {DeleteBanner}