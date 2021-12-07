import * as express from 'express'
import {calculateBmi} from './bmiCalculator'
import { calculateExercises } from './exerciseCalculator';
const app = express()
app.use(express.json())
const PORT = 3000;
app.get('/ping',(_req,res)=>{
    res.send('pong')
})
app.get('/hello', (_req,res)=>{
    res.send('Hello Full Stack!')
})
app.get('/bmi',(req,res)=>{
    const query= req.query;
    const weight:number = Number(query.weight);
    const height:number = Number(query.height);
    if(!height || !weight || !isNaN((height)) || !isNaN((weight)) ){
        const bmi = calculateBmi(Number(height),Number(weight))
        res.json({weight, height, bmi})
    }
    else{
        res.status(400).json({error: "malformatted parameters"})
    }
})
app.post('/exercise', (req,res)=>{
    
    if(!req.body.target || !req.body.training){
        res.status(200).send("parameters missing")
    }    
    if(isNaN(req.body.target)|| !Array.isArray(req.body.training)){
        
        res.status(200).send("malformatted parameters")
    }
    const target:number = Number(req.body.target);
    const training:number[] = req.body.training;
    const resObj = calculateExercises(training, target)
    res.json(resObj)
})
app.listen(3000, ()=>{
    console.log(`running on ${PORT}`)
})