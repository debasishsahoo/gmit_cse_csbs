const userServices=require('../services/user.service')


const userController={
    SIGNUP:async(req,res)=>{
        try {
            const user = await userServices.INSERT(req.body);
            res.status(201).json({ 
            message: "User registered successfully", user })
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    SIGNIN:async(req,res)=>{},
    SIGNOUT:async(req,res)=>{},
    CHANGE_PASSWORD:async(req,res)=>{},
    GET_USER_DETAILS:async(req,res)=>{},
    GET_ALL_USER:async(req,res)=>{},
    UPDATE_USER_PROFILE:async(req,res)=>{},
    DELETE_USER_PROFILE:async(req,res)=>{},
}

module.exports=userController