import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";

import productRoute from '../routers/product';

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());


app.use('/api', productRoute);

mongoose.connect('mongodb://localhost:27017/demo-nodejs')
.then(()=> console.log("Két nối db thành công"))
.catch((error) => console.log(error));


const PORT = 8000;
app.listen(PORT,()=>{
    console.log("server is running port", PORT);
})