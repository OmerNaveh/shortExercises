import express from "express";
import { createPatient, getSecurePatients,getPatientById ,isString, toNewPatient } from "../services/patientService";
const router = express.Router();

router.get('/', (_req,res)=>{
    res.json(getSecurePatients());
});
router.get('/:id', (req,res)=>{
    if(!req.params.id || !isString(req.params.id)){
        res.status(400).send('invalid id');
    }
    const patient = getPatientById(req.params.id);
    if(patient){
        res.json(patient);
    }
    else res.status(400).send('invalid id');
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