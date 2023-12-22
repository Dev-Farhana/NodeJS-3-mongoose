import express  from "express";
import User from "../models/User.js";

const router = express.Router();

const users = [
    {
        id: 1,name: "Ab", email: "abcd@mail.com"
    },
    {
        id:2 ,name: "Oana", email: "Oan@mail.com"
    }
]

router.get("/", (req,res) => {
    res.status(200).send({users: users})
})

router.post("/", async (req,res)=> {
    try {
        const user =  new User(req.body);
        const newUser = await user.save()
        return   res.status(200).send({status: 200 , message: "success!", users: newUser})    
    } catch (error) {
        return res.status(400).send({ status: 400   ,message: error})
    }
    console.log("req==>", req.body);
})

export default router;