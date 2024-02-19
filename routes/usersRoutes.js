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

// Define a GET route for fetching a single user
router.get('/users/:userId', async (req, res) => {
  const obj = await db.query(`SELECT * FROM users WHERE user_id = ${req.params.userId}`)
  // console.log(user)
  res.json(obj.rows[0])
})

// Export the router
export default router

