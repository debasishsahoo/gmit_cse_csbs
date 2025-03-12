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
    SIGNIN:async(req,res)=>{
        try {
            const { email, password } = req.body;
            const token = await userServices.LOGIN(email, password);
            res.status(200).json({ message: "Login successful", token });
          } catch (error) {
            res.status(400).json({ error: error.message });
          }
    },
    SIGNOUT:async(req,res)=>{
        res.status(200).json({ message: "Logout successful" });
    },
    CHANGE_PASSWORD:async(req,res)=>{
        try {
            const { userId, oldPassword, newPassword } = req.body;
            await userServices.CHANGE_PASSWORD(userId, oldPassword, newPassword);
            res.status(200).json({ message: "Password updated successfully" });
          } catch (error) {
            res.status(400).json({ error: error.message });
          }
    },
    GET_USER_DETAILS:async(req,res)=>{
        try {
            const user = await userServices.VIEW_SINGLE(req.params.id);
            res.status(200).json(user);
          } catch (error) {
            res.status(404).json({ error: error.message });
          }
    },
    GET_ALL_USER:async(req,res)=>{},
    UPDATE_USER_PROFILE:async(req,res)=>{
        try {
            const updatedUser = await userServices.UPDATE(req.params.id, req.body);
            res
              .status(200)
              .json({ message: "User updated successfully", user: updatedUser });
          } catch (error) {
            res.status(400).json({ error: error.message });
          }
    },
    DELETE_USER_PROFILE:async(req,res)=>{
        try {
            const userId = req.params.id; 
            await userServices.DELETE(userId);
            res.status(200).json({ message: "User deleted successfully" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
}

module.exports=userController