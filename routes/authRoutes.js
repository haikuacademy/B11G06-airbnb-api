import { Router } from 'express'
const router = Router()
import db from '../db.js' // import the database connection

router.get('/auths', async (req, res) => {
  // don't forget async
  try {
    const { rows } = await db.query('SELECT * FROM users') // query the database
    console.log(rows)
    res.json(rows) // respond with the data
  } catch (err) {
    console.error(err.message)
    res.json(err)
  }
})

// Define a GET route for fetching the list of products
router.get('/auths', (req, res) => {
  res.json('List of auths')
})

// Define a GET route for fetching a single user
router.get('/signup', (req, res) => {
  res.json('signup')
})

router.get('/login', (req, res) => {
  res.json('login')
})

router.get('/logout', (req, res) => {
  res.json('logout')
})

// Export the router
export default router
