import mongoose from 'mongoose';


var measureSchema = new mongoose.Schema({
  name: String,
  height: Number,
  weight: Number
});

var Measure = mongoose.model('Measure', measureSchema);

Measure.getAll = () => {
  return Measure.find({});
}

Measure.addMeasure = (newMeasure) => {
  return newMeasure.save();
}

export default Measure;