import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import * as middlewares from "./middlewares.js";
import dotenv from "dotenv"


dotenv.config({path:'./config.env'})

const app = express();


if(process.env.NODE_ENV==='development')app.use(morgan("dev"));
app.use(express.static("./public"));
app.use(helmet());
app.use(cors());
app.use(express.json());//() here coz it will return the function



app.get("/", async (req, res) => {
  console.log(req.requestTime)
  res.json({
    message: "API Started...",
  });
});

// will move this to controller
const addRequestTime=(req,res,next)=>{
  req.requestTime=new Date().toISOString()
  next()
}
 


app.use(addRequestTime)


app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
export default app;
