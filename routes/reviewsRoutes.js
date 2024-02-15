import { Router } from 'express'
const router = Router()

// Define a GET route for fetching the list of products
router.get('/reviews', (req, res) => {
  res.send('List of reviews')
})

// Define a GET route for fetching a single user
router.get('/reviews/1', (req, res) => {
    res.send({ 'reviewId:1, review: ok'})
})

// Export the router
export default router