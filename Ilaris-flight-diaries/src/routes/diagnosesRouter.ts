import express from "express";
import { diagnoses } from "../Data/diagnoses";
const router = express.Router();

router.get('/', (_req,res)=>{
    res.json(diagnoses);
});

export default router;