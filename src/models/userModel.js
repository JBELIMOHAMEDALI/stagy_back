const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  companyDomain: {
    type: String,
  },
  companyName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
  },
  authority: {
    type: String,
    enum: ['Student', 'Company'],
    required: true
  },
  cv: {
    type: String,
  },
  saveOfferList:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Offre'}],
  // demandeList:[{status :{type:String, enum: ['In Progress', 'Accepted','Refused']},demonde :{ type: mongoose.Schema.Types.ObjectId, ref: 'Offre' }},],  
});
const User = mongoose.model('User', userSchema);

module.exports = User;
