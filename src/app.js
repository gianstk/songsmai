import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import connectToDB from './db/db';

// import { Measure } from './models/measure.js';


// mongoose.connect('mongodb://127.0.0.1:2717/songsmai', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// })
// console.log("connect to mongodb server")



connectToDB();
var db = mongoose.connection;


// var measure1 = new Measure({ name: "Sirabhop Kongruangkit", height: 175, weight: 65 });
// console.log(measure1);

// measure1.save();


const app = express();
const port = process.env.PORT || 12000;

// // parse application/x--www-form-urlencoded
// app.use(bodyParser.urlencoded( { extended: false }));
// // parse application/json
// app.use(bodyParser.json());


// // PageTransitionEvent.initialize();


// const measures = [
//   {
//     id: 1,
//     name: "Sirabhop Kongruangkit",
//     data1: 120,
//     data2: 50
//   }
// ]


// // app.get('/', (req, res) => {
// //   res.send("This is the front-site!!");
// // });


// app.get('/measure', (req, res) => {
//   res.send(measures);
// });

// app.post('/measure', (req, res) => {
//   res.send(req.body)
// })


app.listen(port, console.log(`main application is listening to port: ${port}`));