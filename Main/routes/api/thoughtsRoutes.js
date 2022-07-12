const router = require('express').Router();
const {
  getSingleThought,
  getThoughts,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction
} = require('../../controllers/thoughtsController');


// Get all thougths and create new thought routes
router.route('/').get(getThoughts).post(createThought);

// Get one thought by id
router.route('/:thoughtId').get(getSingleThought);

// Update thought by Id
router.route('/:thoughtId').put(updateThought);

// Delete thought by Id
router.route('/:thoughtId').delete(deleteThought);

// Add Reaction
router.route('/:thoughtId/reactions').get(getThoughts).post(addReaction);

// Delete Reaction
router.route('/:thoughtId/reactions/:reactionId').get(getThoughts).delete(removeReaction);

module.exports = router;
