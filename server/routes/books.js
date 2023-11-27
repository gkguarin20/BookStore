const router = require('express').Router();
let Book = require('../models/book.model');

//endpoint
router.route('/').get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const authors = req.body.authors;
  const coverImageUrl = req.body.coverImageUrl;
  const gener = req.body.gener;

  const newBook = new Book({
    title,
    description,
    authors,
    coverImageUrl,
    gener,
  });

  newBook
    .save()
    .then(() => res.json('Book added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then((book) => res.json('Book deleted'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      book.title = req.body.title;
      book.description = req.body.description;
      book.authors = req.body.authors;
      book.coverImageUrl = req.body.coverImageUrl;
      book.gener = req.body.gener;

      book
        .save()
        .then(() => res.json('Book updated'))
        .catch((err) => err.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
