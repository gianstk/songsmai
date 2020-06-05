import express from 'express';
import bodyParser from 'body-parser';

import connectToDB from './db/db';
import measureRoute from './routes/measure.route';


// var measure1 = new Measure({ name: "Sirabhop Kongruangkit", height: 175, weight: 65 });
// console.log(measure1);

// measure1.save();


const app = express();
const port = process.env.PORT || 12000;

// // parse application/x--www-form-urlencoded
app.use(bodyParser.urlencoded( { extended: false }));
// // parse application/json
app.use(bodyParser.json());



app.use(measureRoute);


connectToDB();

app.get('/', (req, res) => {
  res.send("Invalid endpoint!");
});

app.listen(port, console.log(`main application is listening to port: ${port}`));