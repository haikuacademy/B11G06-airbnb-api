import { Router } from 'express'
const router = Router()
import db from '../db.js'

// Define a GET route for fetching the list of users
router.get('/users', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM users')
    console.log(rows)
    res.json(rows)
  } catch (err) {
    console.error(err.message)
    res.json(err)
  }
})


router.get('/users/1', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM users WHERE id = 1')
    console.log(rows)
    res.json(rows)
  } catch (err) {
    console.error(err.message)
    res.json(err)
  }
})
export default router













