import e from "express";
import { configDotenv } from "dotenv";
import { connect } from "./database/connection.js";

configDotenv();
const app=e();

app.use(e.json());

//connect();

app.listen(8080,()=>console.log("listening......."));