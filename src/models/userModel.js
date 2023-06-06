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
  img: {
    type: String,
  },
  valid: {
    type: Boolean,
    required: true,
    default : false
  },
  // 
  saveOfferList:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Offre'}],
});
const User = mongoose.model('User', userSchema);

module.exports = User;
