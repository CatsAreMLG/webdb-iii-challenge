const express = require('express')
const Cohorts = require('../helpers/cohortsDb')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const cohorts = await Cohorts.get()
    res.status(200).json(cohorts)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
