import express  from 'express';
import cors from 'cors';
import router from './routes/index.js';
import mongoose from './db/index.js';

const app =  express();
const PORT = process.env.PORT || 8000;

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connectin Error"));
db.once("open" , () => console.log("Db connected!"));


app.use(express.json());
app.use(cors());

// app.use('/', (req,res, next) => {
//  console.log("Requset aagai.." , req.query)
//  if(req?.query?.apiKey === '12'){
//     next()
//  } else{
//     res.status(401).send({message: "Not Allow"})
//  }
// })

app.use('/api' , router);

app.listen(PORT, () => console.log(`Sever is running on ${PORT}`))