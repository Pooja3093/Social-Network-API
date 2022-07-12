const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// Create new user and get all users routes
router.route('/').get(getUsers).post(createUser);

// Get single user by Id
router.route('/:userId').get(getSingleUser);

// Update user by Id
router.route('/:userId').put(updateUser);

// Delete user by Id
router.route('/:userId').delete(deleteUser);

// Add friend
router.route('/:userId/friends/:friendId').get(getUsers).post(addFriend);

// Delete friend
router.route('/:userId/friends/:friendId').get(getUsers).delete(removeFriend);

module.exports = router;
