import { Router } from 'express'
const router = Router()

// Define a GET route for fetching the list of products
router.get('/reviews', (req, res) => {
  res.send('List of reviews')
})

// Define a GET route for fetching a single user
router.get('/review/1', (req, res) => {
  res.send('review 1')
})

// Export the router
export default router