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
    Character.find()
      .then(character => res.json(character))
      .catch(next);
  })
  
  .get('/page/:page', (req, res, next) => {
    const resPerPage = 5;
    const page = req.params.page || 1;
    Character.find()
      .skip((resPerPage * page) - resPerPage)
      .limit(resPerPage)
      .then(character => res.json(character))
      .catch(next);
  })

  .put('/:id', ({ params, body }, res, next) => {
    Character
      .findByIdAndUpdate(
        params.id,
        body, 
        { new: true })
      .then(updatedSettings => res.json(updatedSettings))
      .catch(next);
  });

module.exports = router;
