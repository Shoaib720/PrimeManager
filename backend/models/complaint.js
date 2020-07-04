const mongoose = require('mongoose');

const complaintSchema = mongoose.Schema({
  date: {type: String, required : true},
  content: {type: String, required : true},
  complainerName: {type: String, required : true},
  complainerEmail: {type: String, required : true}
});

module.exports = mongoose.model('Complaint', complaintSchema, 'complaints');
