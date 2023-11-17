const express = require('express');
const router = express.Router()
const requireAuth = require('../middleware/requireAuth');

const {
  getYears,
  getYear,
  createYear,
  deleteYear
} = require('../controllers/yearControllers')

router.use(requireAuth)

router.get('/', getYears)

router.get('/:id', getYear)

router.post('/', createYear)

router.delete('/:id', deleteYear)

module.exports = router; 