const Offre = require('../models/offreModel');
const Saveof = require('../models/saveoffModel');
const User = require('../models/userModel');

// myoffresavedModel  

exports.SaveOffreEtud = async (req, res) => {
  const userID = req.params.id_u;
  const offreID = req.params.id_o;
  try {  
    const saveOffre = await User.findByIdAndUpdate(
      userID ,
        { $push: { offreList:offreID } },
        { new: true }
       );
   res.status(200).json({err: false, message: "Successful operation !", rows: saveOffre});
  } catch (error) {
    res.status(500).json({ err: true, message: error.message });
  }
};


exports.getSavedEtud = async (req, res) => {
  const offreID = req.params.offreID;
  const etudiontID = req.params.etudiontID;
  try {
    // const offre = await offre.findOne({ offreID });
    const offres = await Saveof.find({ etudiontID }).populate(offreID);
    if (!offres) {
      return res.status(404).json({ err: true, message: "No (data,operation) (found,done) ! " });
    }
    res.status(200).json({err: false, message: "Successful operation !", rows: offres});
  } catch (error) {
    res.status(500).json({ err: true, message: error.message });
  }
};
 
/*   








*/


exports.createOffreStage = async (req, res) => {
 
    try {     
      const offre = Offre(req.body);
    await offre.save();
    res.status(200).json({err: false, message: "Successful operation !", rows: offre});
    } catch (error) {
      res.status(500).json({ err: true, message: error.message });
    }
  };
  
// Get all Offre Stage
exports.getAllOffreStage = async (req, res) => {
    try {
      const offre = await Offre.find();
      res.json(offre);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Get a single Offre Stage 
  exports.getOneOffreStageByID = async (req, res, next) => {
      try {
        const offre = await Offre.findById(req.params.id );
        if (!offre) {
          return res.status(404).json({ message: 'Data not found' });
        }
        res.json(offre);
      } catch (err) {
        next(err);
      }
    };
  
  // Update a Offre Stage 
  exports.updateOffreStage = async (req, res) => {
    try {
      const { titre, dateDebut, dateFin, description,email,tel,id } = req.body;
      const offre = await Offre.findOneAndUpdate(
        { id },
        {titre, dateDebut, dateFin, description,email,tel},
        { new: true }
      );
      if (!offre) {
        return res.status(404).send({ message: "Operation Failed" });
      }
      res.status(200).send(offre);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal server error" });
    }
  };
  
  // Delete a  Offre Stage  
  exports.deleteOffreStage = async (req, res, next) => {
    try {
      const id = req.params.id;
      const offre = await Offre.findByIdAndDelete(id);
      if (!offre) {
        return res.status(404).json({ err: true, message: "No (data,operation) (found,done) ! " });
      }
      res.status(200).json({err: false, message: "Successful operation !", rows: offre});
    } catch (err) {
      res.status(500).json({ err: true, message: error.message });
    }
  };
  





