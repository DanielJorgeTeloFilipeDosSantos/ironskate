'use strict';

// User model goes here

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  latitude: {
  },
  longitude: {
  },
  description: {
  },
  image: {
  },
  video: {
  }
});

const Spots = mongoose.model('Spots', schema);

module.exports = Spots;