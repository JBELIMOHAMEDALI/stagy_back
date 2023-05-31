const Offre = require('../models/offreModel');
const User = require('../models/userModel');
const Suggestion = require('../models/suggestionModel');
const Demonde = require('../models/demondeModel');

 

exports.countDemandeStudent = async (req, res) => {
    const StudentID = req.params.id;
    try {
      const count = await Demonde.countDocuments({ StudentID });
      res.status(200).json({err: false, message: "Successful operation !", rows: {count, StudentID} });
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: true, message: error.message });
    }
  };

  exports.countDemandeCompny = async (req, res) => {
    const enterpriseID = req.params.id;
    try {
      const count = await Demonde.countDocuments({ enterpriseID });
      res.status(200).json({err: false, message: "Successful operation !", rows: {count, enterpriseID} });
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: true, message: error.message });
    }
  };

  
exports.countSuggestionStudent = async (req, res) => {
  const StudentID = req.params.id;
  try {
    const count = await Suggestion.countDocuments({ StudentID });
    res.status(200).json({err: false, message: "Successful operation !", rows: {count, StudentID} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: true, message: error.message });
  }
};

exports.countSuggestionCompny = async (req, res) => {
  const enterpriseID = req.params.id;
  try {
    const count = await Suggestion.countDocuments({ enterpriseID });
    res.status(200).json({err: false, message: "Successful operation !", rows: {count, enterpriseID} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: true, message: error.message });
  }
};

exports.countOffreCompny = async (req, res) => {
  const enterpriseID = req.params.id;
  try {
    const count = await Offre.countDocuments({ enterpriseID });
    res.status(200).json({err: false, message: "Successful operation !", rows: {count, enterpriseID} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: true, message: error.message });
  }
};
