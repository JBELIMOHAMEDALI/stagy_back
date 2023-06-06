const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({

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
  valid: {
    type: Boolean,
    required: true,
    default : true
  },
  authority: {
    type: String,
    required: true,
    default : "admin"

  },
});
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
