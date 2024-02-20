import { Router } from 'express'
const router = Router()
import db from '../db.js' // import the database connection

router.get('/bookings', async (req, res) => {
  try {
    // Step 1: define the string for the query to return everything by defuault
    let queryString = 'SELECT * FROM bookings'
    // Step 2: check if query exists
    if (req.query.userId) {
      // Step 3: modify query string to get the booking of that specic user
      queryString += ` WHERE user_id = ${req.query.userId}`
    }
    queryString += ` ORDER BY booking_date DESC`
    console.log(queryString)
    // Step 4: send query to database
    let bookings = await db.query(queryString)
    // Step 5: check if bookings.rows empty
    if (bookings.rows.length === 0) {
      // Step 6: if empty throw error
      throw new Error('User not found')
    }
    res.json(bookings.rows)
  } catch (err) {
    res.json(err.message)
  }
})
router.get('/bookings/:bookingId', async (req, res) => {
  let bookingId = req.params.bookingId
  // don't forget async
  try {
    const { rows } = await db.query(
      `SELECT * FROM bookings WHERE booking_id =${bookingId}`
    )
    console.log(rows)
    if (rows.length === 0) {
      throw new Error('booking not found')
    }
    res.json(rows) // respond with the data
  } catch (err) {
    console.error(err.message)
    res.json(err.message)
  }
})

export default router
