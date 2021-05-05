var express = require('express');
var router = express.Router();
const database = require('../database/database');

router.get('/', function(req, res, next) {
  res.send(database.books.get('books'));
});

router.get('/:id(\d+)', function(req, res, next) {
  res.send(req.params.id);
});

router.post('/', function(req, res, next) {
  database.books.put('books:name', req.body.name);
  database.books.put('books:date', req.body.date);
  database.books.put('books:pages', req.body.pages);
  res.send(req.body);
});

router.delete('/:id(\d+)', function(req, res, next) {
	database.books.delete(
		['name', 'date', 'pages']
	);
});

module.exports = router;
