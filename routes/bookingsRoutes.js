import { Router } from 'express'
const router = Router()

// Define a GET route for fetching the list of products
router.get('/bookings', (req, res) => {
  res.send('List of bookings')
})

// Define a GET route for fetching a single user
router.get('/booking', (req, res) => {
  res.send('booking 1')
})

// Export the router
export default router
