const Offre = require('../models/offreModel');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const Suggestion = require('../models/suggestionModel');
const Demonde = require('../models/demondeModel');
const Admin = require('../models/adminModel');

exports.createAdmin = async (req, res) => {
  try {   
  const {password} = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt); 
    let admin = Admin(req.body);
    admin.password = hashedPassword;
  await admin.save();
  res.status(200).json({err: false, message: "Successful operation !", rows: admin});
  } catch (error) {
    res.status(500).json({ err: true, message: error.message });
  }
};

exports.getAllUsersBayAuthority = async (req, res) => {
  const authority =req.params.authority
  const valid =req.params.valid
  try {
    const users = await User.find({authority:authority}).select('-password');
    if (!users) {
      return res.status(404).json({ err: true, message: "No (data,operation) (found,done) ! " });
    }
    res.status(200).json({err: false, message: "Successful operation !", rows: users});
  } catch (error) {
    res.status(500).json({ err: true, message: error.message });
  }
};
exports.getAllUsersBayAuthorityAndValide = async (req, res) => {
    const authority =req.params.authority
    const valid =req.params.valid
    try {
      const users = await User.find({authority:authority, valid: valid }).select('-password');
      if (!users) {
        return res.status(404).json({ err: true, message: "No (data,operation) (found,done) ! " });
      }
      res.status(200).json({err: false, message: "Successful operation !", rows: users});
    } catch (error) {
      res.status(500).json({ err: true, message: error.message });
    }
  };
  exports.updateStatusStudentOrCopmny = async (req, res) => {
    try {
      const { valid,_id } = req.body;
      const user = await User.findByIdAndUpdate(
        { _id },
        {valid},
        { new: true }
      );
      if (!user) {
        return res.status(404).send({ message: "Operation Failed" });
      }
      res.status(200).send(user);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal server error" });
    }
  };



  exports.countAllDemande = async (req, res) => {
    try {
      const count = await Demonde.count();
      res.status(200).json({err: false, message: "Successful operation !", rows: {count} });
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: true, message: error.message });
    }
  };
  exports.countAllOffre = async (req, res) => {
    try {
      const count = await Offre.count();
      res.status(200).json({err: false, message: "Successful operation !", rows: {count} });
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: true, message: error.message });
    }
  };
  exports.countAllSuggestion= async (req, res) => {
    try {
      const count = await Suggestion.count();
      res.status(200).json({err: false, message: "Successful operation !", rows: {count} });
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: true, message: error.message });
    }
  };
  exports.countAccountByValid= async (req, res) => {
    const valid =req.params.valid
    try {
      const count = await User.countDocuments({valid:valid});
      res.status(200).json({err: false, message: "Successful operation !", rows: {count} });
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: true, message: error.message });
    }
  };


  exports.counUsersBayAuthority= async (req, res) => {
    const authority =req.params.authority
    try {
      const count = await User.countDocuments({authority:authority});
      res.status(200).json({err: false, message: "Successful operation !", rows: {count} });
    } catch (error) {
      console.error(error);
      res.status(500).json({ err: true, message: error.message });
    }
  };
// 