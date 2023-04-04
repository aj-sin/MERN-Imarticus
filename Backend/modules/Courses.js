const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  enrollment: {
    type: Number,
    default: 0
  },
  free:{
    type:Boolean,
    default:true
  }
});

module.exports = mongoose.model('Course', courseSchema);
