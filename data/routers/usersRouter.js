const express = require('express')
const Users = require('../helpers/usersDb')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await Users.get()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const user = await Users.get(id)
    user
      ? res.status(200).json(user)
      : res.status(404).json({ message: 'user not found' })
  } catch (error) {
    res.status(500).json(error)
  }
})

router.get('/:id/students', async (req, res) => {
  const { id } = req.params
  try {
    const user = await Users.findStudents(id)
    const finduser = await Users.get(id)
    finduser
      ? res.status(200).json(user)
      : res.status(404).json({ message: 'user not found' })
  } catch (error) {
    res.status(500).json(error)
  }
})

router.post('/', async (req, res) => {
  const { body } = req
  if (body && body.name)
    try {
      const user = await Users.insert(body)
      res.status(200).json(user)
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
      const user = await Users.update(id, body)
      user
        ? res.status(200).json(user)
        : res.status(404).json({ message: 'user not found' })
    } catch (error) {
      res.status(500).json(error)
    }
  else res.status(500).json({ error: 'Please provide a name' })
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const deleted = await Users.remove(id)
    deleted
      ? res.status(200).json(deleted)
      : res.status(404).json({ message: 'user not found' })
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router
