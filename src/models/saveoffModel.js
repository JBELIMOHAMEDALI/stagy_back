const mongoose = require('mongoose');

const saveoffSchema = new mongoose.Schema({
  offreID: { type: mongoose.Schema.Types.ObjectId, required: true, ref:'Offre' },
  etudiontID: { type: mongoose.Schema.Types.ObjectId, required: true, ref:'User' },

});
const Saveoff = mongoose.model('Saveoff', saveoffSchema);

module.exports = Saveoff;
