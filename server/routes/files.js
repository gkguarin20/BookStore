const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');
let Author = require('../models/author.model');

const fullPath = path.resolve('../Books.json');

fs.readFile(fullPath, (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    if (data.length > 0) {
      let json = JSON.parse(data);
      const authors = json['authors'];
      return authors;
    }
  }
});

module.exports = fs;
