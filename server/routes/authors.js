const router = require('express').Router();
let Author = require('../models/author.model');

//setheader

router.route('/').get((req, res) => {
  Author.find()
    .then((authors) => res.json(authors))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post(async (req, res) => {
  const name = req.body.name;

  const newAuthor = new Author({ name });

  newAuthor
    .save()
    .then(() => res.json('Author added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
