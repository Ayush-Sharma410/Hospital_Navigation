const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  startRoom: {
    type: String,
    required: true,
  },
  endRoom: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  path:{
    type: String,
    required: true
  }
});

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;
