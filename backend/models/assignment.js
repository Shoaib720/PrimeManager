const mongoose = require('mongoose');

const asgnSchema = mongoose.Schema({
  date: {type: String, required : true},
  subject: {type: String, required : true},
  asgnNo: {type: Number, required : true},
  lastDate: {type: String, required : true},
  email: {type: String, required : true},
  content: {type: String, required : true}
});

module.exports = mongoose.model('Assignment', asgnSchema, 'assignments');
