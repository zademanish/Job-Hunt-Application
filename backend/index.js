import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";
import dotenv from 'dotenv';
import connectDB from "./utils/db.js"
import path from 'path';
import AuthRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationRoute from "./routes/application.route.js"
const app = express();

dotenv.config({});

const _dirname = path.resolve();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption= {
    origin:process.env.FRONT_END_URL,
    credentials:true
}
app.use(cors(corsOption));

app.use('/api/v1/user', AuthRoute);
app.use('/api/v1/company', companyRoute);
app.use('/api/v1/job', jobRoute);
app.use('/api/v1/application', applicationRoute);

app.use(express.static(path.join(_dirname,"/frontend/dist")))
app.get('*', (_,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"))
})
const PORT=process.env.PORT || 3000
app.listen(PORT, ()=>{
    connectDB();
    console.log(`server is listing on ${PORT}`)
})