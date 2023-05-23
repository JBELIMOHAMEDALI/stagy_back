const mongoose = require('mongoose');

const demandeSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  CV: {
    type: String,
  },
  etudiontID: { type: mongoose.Schema.Types.ObjectId, required: true, ref:'User' },
  status: {
    type: String,
    enum: ['In progress', 'Accepted', 'Rejected'],
    default: 'In progress'
  },
});
const Demande = mongoose.model('Demande', demandeSchema);

module.exports = Demande;
