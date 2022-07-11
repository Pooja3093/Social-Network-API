const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/thoughtsController');


// Get all thougths and create new thought routes
router.route('/').get(getThoughts).post(createThought);

//  Get one thought by id
router.route('/:thoughtId').get(getSingleThought);

//  Update thought by Id
router.route('/:thoughtId').put(updateThought);

//  Delete thought by Id
router.route('/:thoughtId').delete(deleteThought);

module.exports = router;
