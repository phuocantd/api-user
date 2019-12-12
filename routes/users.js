const express = require('express');
const router = express.Router();

const {protected, authorized} =require('../middleware/auth')

const {
  updateUser,
  updatePassword
} = require('../controllers/user');
const {getSignedUrl} = require('../controllers/upload');

router.use(protected)

router
  .route('/:id')
  .put(updateUser)

router
  .route('/:id/newpw')
  .put(updatePassword)

router
  .route('/upload')
  .post(getSignedUrl);


module.exports = router;
