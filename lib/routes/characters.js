// eslint-disable-next-line new-cap
const router = require('express').Router();
const Character = require('../models/character');


router
  .post('/', (req, res, next) => {
    Character.create(req.body)
      .then(character => res.json(character))
      .catch(next);
  })
  
  .get('/page/:page', (req, res, next) => {
    const resPerPage = 10;
    const page = req.params.page || 1;
    Character.find(req.params)
      .select('name')
      .then(character => res.json(character))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    Character.find(req.params)
      .then(res.send(req.body))
      .catch(next);
  });

module.exports = router;
