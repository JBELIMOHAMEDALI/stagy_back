const mongoose = require('mongoose');

const offreSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  description : {
    type: String,
    required: true,
  },
  dateDebut: {
    type: String,
    required: true,
  },
  dateFin: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  requirement: {
    type: String,
    required: true
  },
  enterpriseID:{ type: mongoose.Schema.Types.ObjectId,  required: true ,ref: 'User' },
  userDemonde:{ type: mongoose.Schema.Types.ObjectId,  required: true ,ref: 'User' },
  // userproposition:{ type: mongoose.Schema.Types.ObjectId,  required: true ,ref: 'User' },
});
const Offre = mongoose.model('Offre', offreSchema);

module.exports = Offre;
