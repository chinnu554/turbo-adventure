const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");
const app = express();
app.use(cors());
app.use(express.json());
const url = "mongodb+srv://chinnubase:chinnubase@cluster0.tnbzhbg.mongodb.net/?appName=Cluster0";
const client = new MongoClient(url);
async function connectdb(){
        try{
            await client.connect();
        console.log("mongodb is connected");
        }
        catch(err){
            console.log(err);
        }
        console.log("action completed");
}
connectdb();
app.listen(3000,()=>{
    console.log("server is running at port 3000");
})
app.get("/",(req,res)=>{
    console.log("server is opeend at 3000");
    res.status(200).send("Working finely");
})
app.post("/contact",async (req,res)=>{
   try{
    console.log(req.body);
    const db = client.db("crud");
   const collection = db.collection("new");
   await collection.insertOne(req.body);
   console.log("Data submitted in db")
   }
   catch(err){
    console.log(err);
   }
})