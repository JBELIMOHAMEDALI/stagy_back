const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  prenom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    default: "0"
  },
  CV: {
    type: String,
  },

  offreList:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Offre' }],
  demandeList:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Demande' }]

});
const User = mongoose.model('User', userSchema);

module.exports = User;
