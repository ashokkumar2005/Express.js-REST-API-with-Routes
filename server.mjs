 import express from "express";
 import usersroutes from "./routes/userroutes.mjs";

 const app=express();

 app.use(express.json());

 app.use("/users",usersroutes);

 app.listen(3000,()=>{
    console.log("server is running at 3000");
 })
