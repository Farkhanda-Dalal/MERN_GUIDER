import { Router } from "express";

const trialRouter=Router();

trialRouter.get("/",()=>{
    console.log("print something")
})
// add more such routes

export default trialRouter;