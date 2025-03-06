const express=require('express');
require('dotenv').config();

const PORT=process.env.PORT;
const HOST=process.env.HOST;

const server = express();



server.use("/api/health",(req,res)=>{
    res.status(200).json({
        msg:"Api is Running....",
        error:'',
        data:''
    })
})




server.listen(PORT,()=>{
console.log(`Server is Running ON http://${HOST}:${PORT}`)
})