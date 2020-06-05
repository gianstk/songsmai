import mongoose from 'mongoose';


var measureSchema = new mongoose.Schema({
  name: String,
  height: Number,
  weight: Number
});

var Measure = mongoose.model('Measure', measureSchema);


export { Measure };



// const Measure = mongoose.model('Measure', {
//   id: 1,
//   name: "Sirabhop Kongruangkit",
//   data1: 120,
//   data2: 50
// })