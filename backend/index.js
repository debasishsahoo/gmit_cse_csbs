const express=require('express');
require('dotenv').config();

const PORT=process.env.PORT;
const HOST=process.env.HOST;

const server = express();
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use("/api/health",(req,res)=>{
    res.status(200).json({
        msg:"Api is Running....",
        error:'',
        data:''
    })
})


let item=[]//In-Memory Database


// INSERT data in to database(CREATE)
               //ROUTER URL  //API METHODS
server.post('/api/items/add',(req,res)=>{
     res.json(req.body);
})

// VIEW all data from database (READ)
//server.get()















server.listen(PORT,()=>{
console.log(`Server is Running ON http://${HOST}:${PORT}`)
})