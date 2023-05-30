const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  description : {
    type: String,
    required: true,
  },
  CV : {
    type: String,
  },
  createDate : {
    type: Date,
    default: Date.now("YYY-MM-DD")
  },
  status: {
    type: String,
    enum: ['In Progress', 'Accepted','Refused'],
    required: true,
    default : 'In Progress'
  },
  enterpriseID:{ type: mongoose.Schema.Types.ObjectId,  required: true ,ref: 'User' },
  StudentID:{ type: mongoose.Schema.Types.ObjectId,  required: true ,ref: 'User' },
//
});
const Suggestion = mongoose.model('Suggestion', suggestionSchema);

module.exports = Suggestion;
