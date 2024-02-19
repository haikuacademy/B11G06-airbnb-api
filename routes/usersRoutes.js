import { Router } from 'express'
const router = Router()

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
router.get('/users/1', (req, res) => {
  const user1 = [
    { id: 1, firstName: 'Alice' }
    
  ]
  res.json(user1)
})

// Export the router
export default router

