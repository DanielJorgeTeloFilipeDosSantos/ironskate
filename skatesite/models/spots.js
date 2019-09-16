'use strict';

// User model goes here

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
  },
  lat: {
  },
  lng: {
  },
  description: {
  },
  pictures: {
  },
  videos: {
  },
  createdAt: {
  },
  updatedAt: {
  },
  user_id: {
  },
  username: {
  }
});

const Spots = mongoose.model('Spots', schema);

module.exports = Spots;