const express = require("express");
const cors = require("cors"); // Import CORS
const connectDB = require("./configs/db.mongo.conn");
require("dotenv").config();
const userRouter=require("./routers/user.route")


const PORT = process.env.PORT;
const HOST = process.env.HOST;

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// ✅ Enable CORS
server.use(
  cors({
    origin: "*", // Allow frontend to access the API
    //origin: "http://localhost:5173", //Production  Value
    credentials: true, // Allow cookies & authentication headers
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  })
);

server.use("/api/health", (req, res) => {
  res.status(200).json({
    msg: "Api is Running....",
    error: "",
    data: "",
  });
});

let items = []; //In-Memory Database

//INSERT data in to database(CREATE)
//API endpoint=http://127.0.0.1:5000/api/items/insert
               //ROUTER URL     //API METHODS
server.post("/api/items/insert", (req, res) => {
  const body={...req.body};
  const item = { id: Date.now(), ...body};
  items.push(item);
  res.status(201).json(item);
});

//VIEW ALL DATA FROM DATABASE(READ)
//API endpoint=http://127.0.0.1:5000/api/items/view
server.get("/api/items/view", (req, res) => {
  res.status(200).json(items);
});

//READ (single item by ID)
//VIEW SINGLE DATA FROM DATABASE(READ)
//API endpoint=http://127.0.0.1:5000/api/items/view/:id
server.get("/api/items/view/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  item ? res.status(200).json(item) : res.status(404).json({ error: "Item not found" });
});

//UPDATE (single item by ID)
//UPDATE SINGLE DATA FROM DATABASE(UPDATE)
//API endpoint=http://127.0.0.1:5000/api/items/update/:id
server.put("/api/items/update/:id", (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index !== -1) {
    items[index] = { ...items[index], ...req.body };
    res.status(200).json(items[index]);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});

//DELETE (single item by ID)
//DELETE SINGLE DATA FROM DATABASE(UPDATE)
//API endpoint=http://127.0.0.1:5000/api/items/delete/:id
server.delete("/api/items/delete/:id", (req, res) => {
  const index = items.findIndex((i) => i.id === parseInt(req.params.id));
  if (index !== -1) {
    const deletedItem = items.splice(index, 1);
    res.status(200).json(deletedItem);
  } else {
    res.status(404).json({ error: "Item not found" });
  }
});




server.use('/api/user',userRouter)
//server.use('/api/product',productRouter)



connectDB();
server.listen(PORT, () => {
  console.log(`Server is Running ON http://${HOST}:${PORT}`);
});
