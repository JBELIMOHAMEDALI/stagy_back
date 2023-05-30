const Offre = require('../models/offreModel');
const User = require('../models/userModel');
const Suggestion = require('../models/suggestionModel');

// tzed beha offre lil socite 
exports.createSuggestion = async (req, res) => {
  try {     
    const suggestion = Suggestion(req.body);
  await suggestion.save();
  res.status(200).json({err: false, message: "Successful operation !", rows: suggestion});
  } catch (error) {
    res.status(500).json({ err: true, message: error.message });
  }
};

exports.getOneSuggestionByidAndStudentidEnterpriseidall = async (req, res, next) => {
  try {
    const suggestion = await Suggestion.findById(req.params.id ).populate("enterpriseID StudentID" );
    if (!suggestion) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(suggestion);
  } catch (err) {
    next(err);
  }
};


exports.getOneSuggestionByidAndStudentid = async (req, res, next) => {
  try {
    const suggestion = await Suggestion.findById(req.params.id ).populate("enterpriseID" );
    if (!suggestion) {
      return res.status(404).json({ message: 'Data not found' });
    }
    res.json(suggestion);
  } catch (err) {
    next(err);
  }
};

exports.getAllforCompny = async (req, res) => {
  try {
    const offer = await Suggestion.find({enterpriseID :req.params.id}).populate('StudentID');
    if (!offer) {
      return res.status(404).json({ err: true, message: "No (data,operation) (found,done) ! " });
    }
    res.status(200).json({err: false, message: "Successful operation !", rows: offer});
  } catch (error) {
    res.status(500).json({ err: true, message: error.message });
  }
};










exports.getAllforStudents = async (req, res) => {
  try {
    const offer = await Suggestion.find({StudentID:req.params.id}).populate('enterpriseID');
    if (!offer) {
      return res.status(404).json({ err: true, message: "No (data,operation) (found,done) ! " });
    }
    res.status(200).json({err: false, message: "Successful operation !", rows: offer});
  } catch (error) {
    res.status(500).json({ err: true, message: error.message });
  }
};


exports.updateSuggestion = async (req, res) => {
  try {
    const { status,id } = req.body;
    const suggestion = await Suggestion.findOneAndUpdate(
      { id },
      {status},
      { new: true }
    );
    if (!suggestion) {
      return res.status(404).send({ message: "Operation Failed" });
    }
    res.status(200).send(suggestion);
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal server error" });
  }
};

exports.getAllCompny = async (req, res) => {
  try {
    const user = await User.find({authority:"Company"})
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.deleteSuggestion = async (req, res, next) => {
  try {
    const id = req.params.id;
    const suggestion = await Suggestion.findByIdAndDelete(id);
    if (!suggestion) {
      return res.status(404).json({ err: true, message: "No (data,operation) (found,done) ! " });
    }
    res.status(200).json({err: false, message: "Successful operation !", rows: suggestion});
  } catch (err) {
    res.status(500).json({ err: true, message: error.message });
  }
};