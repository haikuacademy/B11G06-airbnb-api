import { Router } from 'express'
const router = Router()
import db from '../db.js'

// Define a GET route for fetching the list of products
router.get('/bookings', async (req, res) => {
  //remember to async
  try {
    const { rows } = await db.query('SELECT * FROM bookings') //database query
    console.log(rows)
    res.json(rows) //respond with the data
  } catch (err) {
    console.error(err.message)
    res.json(err)
    res.send('List of bookings')
  }
})

// Define a GET route for fetching a single user
router.get('/booking/1', (req, res) => {
  res.send('booking 1')
})

// Export the router
export default router
