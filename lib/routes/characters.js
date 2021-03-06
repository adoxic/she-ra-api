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

  .get('/Allies/:cat', (req, res, next) => {
    const category = req.params.cat;
    Character.find({ Allies: category })
      .then(character => res.json(character))
      .catch(next);
  })

  .get('/Enemies/:cat', (req, res, next) => {
    const category = req.params.cat;
    Character.find({ Enemies: category })
      .then(character => res.json(character))
      .catch(next);
  })

  .get('/:name', (req, res, next) => {
    let name = req.params.name;
    name = `${name[0].toUpperCase()}${name.slice(1, name.length)}`;
    Character.find({ name: name })
      .then(character => res.json(character))
      .catch(next);
  })
  
  .get('/perPage/:num/page/:page', (req, res, next) => {
    const resPerPage = +req.params.num;
    const page = +req.params.page || 1;
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
