import { Router } from 'express'
const router = Router()
import db from '../db.js' // import the database connection

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
