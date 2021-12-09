import express  from "express";
import diaryRouter from './routes/diary';
import diagnosesRouter from './routes/diagnosesRouter';
import patientRouter from './routes/patientRouter';
import cors from 'cors';
const app = express();
const PORT = 3001;
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
  });
  
app.use('/api/diaries', diaryRouter);
app.use('/api/diagnoses',diagnosesRouter);
app.use('/api/patients', patientRouter);


app.listen(PORT, ()=>console.log(`running on ${PORT}`)
);