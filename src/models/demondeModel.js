const mongoose = require('mongoose');

const demondeffSchema = new mongoose.Schema({
  offreID: { type: mongoose.Schema.Types.ObjectId, required: true, ref:'Offre' },
  enterpriseID: { type: mongoose.Schema.Types.ObjectId, required: true, ref:'User' },
  studentID: { type: mongoose.Schema.Types.ObjectId, required: true, ref:'User' },
  status: {
    type: String,
    enum: ['In Progress', 'Accepted','Refused'],
    required: true,
    default : 'In Progress'
  },
  createDate : {
    type: Date,
    default: Date.now("YYY-MM-DD")
  },
});
const Demonde = mongoose.model('Demonde', demondeffSchema);

module.exports = Demonde;
