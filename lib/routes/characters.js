// eslint-disable-next-line new-cap
const router = require('express').Router();
const Character = require('../models/character');


router
  .post('/', (req, res, next) => {
    Character.create(req.body)
      .then(character => res.json(character))
      .catch(next);
  })
  
  .get('/', (req, res, next) => {
    Character.find(req.params)
      .select('name')
      .then(character => res.json(character))
      .catch(next);
  });

module.exports = router;
