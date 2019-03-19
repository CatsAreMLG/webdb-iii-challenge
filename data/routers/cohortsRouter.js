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

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const cohort = await Cohorts.get(id)
    cohort
      ? res.status(200).json(cohort)
      : res.status(404).json({ message: 'Cohort not found' })
  } catch (error) {
    res.status(500).json(error)
  }
})

router.post('/', async (req, res) => {
  const { body } = req
  if (body && body.name)
    try {
      const cohort = await Cohorts.insert(body)
      res.status(200).json(cohort)
    } catch (error) {
      res.status(500).json(error)
    }
  else res.status(500).json({ error: 'Please provide a name' })
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  const { body } = req
  if (body && body.name)
    try {
      const cohort = await Cohorts.update(id, body)
      cohort
        ? res.status(200).json(cohort)
        : res.status(404).json({ message: 'Cohort not found' })
    } catch (error) {
      res.status(500).json(error)
    }
  else res.status(500).json({ error: 'Please provide a name' })
})

module.exports = router
