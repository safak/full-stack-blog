import userModel from "../models/user.model.js";
import User from "../models/user.model.js"
import { Webhook } from "svix";

export const clerkWebHook = async (req,res) => {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

    if(!WEBHOOK_SECRET){
        throw new Error("Webhook secret needed!");
    }

    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOK_SECRET);
    let evt;
    try {
        evt = wh.verify(payload, headers);
    } catch (err) {
        res.status(400).json({
            message: "Webhook verification failed",
            error: err.message(),
        });
    }

    console.log("****************************************");
    console.log(evt.data.id);
    console.log(evt.data.email_addresses[0].email_address);

if (evt.type == "user.created") {
        const newUser = new User({
            clerkUserId: evt.data.id,
            username: evt.data.first_name,
            email: evt.data.email_addresses[0].email_address,
            img: evt.data.profile_img_url,
        });
        await newUser.save();
           }
         return res.status(200).json({
        message: "Webhook Recieved",
    });
    
    
 
   
};