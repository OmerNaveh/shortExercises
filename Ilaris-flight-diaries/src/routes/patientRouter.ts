import express from "express";
import { createPatient, getSecurePatients, toNewPatient } from "../services/patientService";
const router = express.Router();

router.get('/', (_req,res)=>{
    res.json(getSecurePatients());
});
router.post('/',(req,res)=>{
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const newPatient = toNewPatient(req.body);
        const createdPatient = createPatient(newPatient);
        res.json(createdPatient);
        
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

export default router;