import Measure from '../models/measure.model';

const controller = {};

controller.getAll = async (req, res) => {
  try {
    const measures = await Measure.getAll();
    res.send(measures);
  }
  catch (err) {
    res.send('Got error in measure-getAll');
  }
};


controller.addMeasure = async (req, res) => {
  let newMeasure = Measure({
    name: req.body.name,
    height: req.body.height,
    weight: req.body.weight
  });

  try {
    const savedMeasure = await Measure.addMeasure(newMeasure);
    res.send(`added: ${savedMeasure}`);
  }
  catch (err) {
    console.log("Got error in addMeasure");
  }
}



export default controller;