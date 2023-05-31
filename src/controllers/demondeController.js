const Offre = require('../models/offreModel');
const User = require('../models/userModel');
const Demonde = require('../models/demondeModel');

exports.createDemonde = async (req, res) => {
  try {     
    const demonde = Demonde(req.body);
  await demonde.save();
  res.status(200).json({err: false, message: "Successful operation !", rows: demonde});
  } catch (error) {
    res.status(500).json({ err: true, message: error.message });
  }
};
exports.getDemondeForStudent = async (req, res, next) => {
  try {
    const demonde = await Demonde.find({studentID :req.params.id}).populate('offreID');
    if (!demonde) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(demonde);
  } catch (err) {
    next(err);
  }
};
exports.getDemondeForCompny = async (req, res, next) => {
  try {
    const demonde = await Demonde.find({enterpriseID :req.params.id} ).populate("offreID studentID" );
    if (!demonde) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(demonde);
  } catch (err) {
    next(err);
  }
};








exports.updateStatusDemonde = async (req, res) => {
  try {
    const demonde = await Demonde.findByIdAndUpdate(req.body.id, {status:req.body.status},{new:true})
    res.status(200).send(demonde);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal server error" });
  }
};
exports.deleteDemonde = async (req, res, next) => {
  try {
    const id = req.params.id;
    const demand = await Demonde.findByIdAndDelete(id);
    if (!demand) {
      return res.status(404).json({ err: true, message: "No (data,operation) (found,done) ! " });
    }
    res.status(200).json({err: false, message: "Successful operation !", rows: suggestion});
  } catch (err) {
    res.status(500).json({ err: true, message: error.message });
  }
};
