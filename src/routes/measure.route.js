import express from "express";
import measureController from "../Controllers/Measure.controller";

const router = express.Router();

router.get('/allMeasures', (req, res) => {
  measureController.getAll(req, res);
});


router.post('/addMeasure', (req, res) => {
  measureController.addMeasure(req, res);
})


export default router; 