const Demande = require('../models/demandeModel');

// add offre de stage 
exports.createDemande = async (req, res) => {
    try {
      const demonde = Demande(req.body);
      await demonde.save();
      res.status(200).json({err: false, message: "Successful operation !", rows: demonde});
    } catch (error) {
      res.status(500).json({ err: true, message: error.message });
    }
  };
  
// Get all Offre Stage
exports.getAllDemande = async (req, res) => {
    try {
      const demande = await Demande.find();
      res.json(demande);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Get a single Offre Stage 
  exports.getOneDemandeByID = async (req, res, next) => {
      try {
        const demand = await Demande.findById(req.params.id );
        if (!demand) {
          return res.status(404).json({ message: 'Data  not found' });
        }
        res.json(demand);
      } catch (err) {
        next(err);
      }
    };
  
  // Update a Offre Stage 
  exports.updateDemande = async (req, res) => {
    try {
      const { titre, description, CV, etudiontID,id } = req.body;
      const demand = await Demande.findOneAndUpdate(
        { id },
        { titre, description, CV, etudiontID },
        { new: true }
      );
      if (!demand) {
        return res.status(404).send({ message: "Offre Stage not found" });
      }
      res.status(200).send(demand);
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: "Internal server error" });
    }
  };
  
  // Delete a  Offre Stage  
  exports.deleteDemande = async (req, res, next) => {
    try {
      const id = req.params.id;
      const demand = await Demande.findByIdAndDelete(id);
      if (!demand) {
        return res.status(404).json({ err: true, message: "No (data,operation) (found,done) ! " });
      }
  
      res.status(200).json({err: false, message: "Successful operation !", rows: demand});
    } catch (err) {
      res.status(500).json({ err: true, message: error.message });
    }
  };
  





