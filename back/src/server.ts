import express from 'express';
import { usersRoute } from './routes/users.route';
import cors from 'cors';

const app=express();
app.use(cors())
app.use(express.json());

app.use('/users',usersRoute);

app.listen(3333,()=>{
    console.log(`servidor rodando em http://localhost:${3333}`);
})

