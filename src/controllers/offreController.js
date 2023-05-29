const Offre = require('../models/offreModel');
const Saveof = require('../models/saveoffModel');
const User = require('../models/userModel');

// tzed beha offre lil socite 
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
      const offre = await Offre.find()
      res.json(offre);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Get a single Offre Stage  bay id 
  exports.getOneOffreStageByID = async (req, res, next) => {
      try {
        const offre = await Offre.findById(req.params.id ).populate("enterpriseID");
        if (!offre) {
          return res.status(404).json({ message: 'Data not found' });
        }
        res.json(offre);
      } catch (err) {
        next(err);
      }
    };
  // Update a Offre Stage bay id 
  exports.updateOffreStage = async (req, res) => {
    try {
      const { titre, dateDebut, dateFin, description,email,tel,requirement,id } = req.body;
      const offre = await Offre.findOneAndUpdate(
        { id },
        {titre, dateDebut, dateFin, description,email,tel,requirement},
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
  // Delete a  Offre Stage  bay id 
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

// get les oofre en fonc de socite 
exports.getOffreBayCompany = async (req, res) => {
  try {
    //const offer = await User.findById(req.params.id).populate(Offre.enterpriseID)  //findById(req.params.id).populate('offres');
    const offer = await Offre.find({enterpriseID :req.params.id})  //findById(req.params.id).populate('offres');
    if (!offer) {
      return res.status(404).json({ err: true, message: "No (data,operation) (found,done) ! " });
    }
    res.status(200).json({err: false, message: "Successful operation !", rows: offer});
  } catch (error) {
    res.status(500).json({ err: true, message: error.message });
  }
};

// save offre 
exports.SaveOffreEtud = async (req, res) => {
  const userID = req.params.id_u;
  const offreID = req.params.id_o;

  try {  
    const saveOffre = await User.findByIdAndUpdate(
      userID ,
        { $push: { saveOfferList:offreID } },
        { new: true }
       );
   res.status(200).json({err: false, message: "Successful operation !", rows: saveOffre});
  } catch (error) {
    res.status(500).json({ err: true, message: error.message });
  }
};
//send demonde 
exports.sanddemandeOffre = async (req, res) => {
  const userID = req.params.id_u;
  const offreID = req.params.id_o;

  try {  
    const saveOffre = await User.findByIdAndUpdate(
      userID ,
        { $push: { demandeList:offreID } },
        { new: true }
       );
   res.status(200).json({err: false, message: "Successful operation !", rows: saveOffre});
  } catch (error) {
    res.status(500).json({ err: true, message: error.message });
  }
};




    // gget offre saved fro student  
exports.getOfferByStudentIdSave = async (req, res) => {
  try {
    const offer = await User.findById(req.params.id).populate('saveOfferList').select('-nome -prenom -email -password -type -demandeList');
    if (!offer) {
      return res.status(404).json({ err: true, message: "No (data,operation) (found,done) ! " });
    }
    res.status(200).json({err: false, message: "Successful operation !", rows: offer});
  } catch (error) {
    res.status(500).json({ err: true, message: error.message });
  }
};
// --------------------------------------------------------------------------------------------------------------------
  // get list of demonde d'offre de stage pour l'entreprise 
exports.getStudentsByOfferId = async (req, res) => {
  try {
    const students = await User.find({authority:"Student", demandeList: req.params.id });
    if (!students) {
      return res.status(404).json({ err: true, message: "No (data,operation) (found,done) ! " });
    }
    res.status(200).json({err: false, message: "Successful operation !", rows: students});
  } catch (error) {
    res.status(500).json({ err: true, message: error.message });
  }
};

// add demand for list user 







