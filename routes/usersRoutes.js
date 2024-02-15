import { Router } from 'express'
const router = Router()

// Define a GET route for fetching the list of users
router.get('/users', (req, res) => {
    const listOfUsers = [
        { id: 1, firstName: 'Alice' },
        { id: 2, firstName: 'Bob' },
        { id: 3, firstName: 'Ross' }
        
    ]
  res.send(listOfUsers)
})

// Define a GET route for fetching a single user
router.get('/users/1', (req, res) => {
  const user1 = [
    { id: 1, firstName: 'Alice' }
    
  ]
  res.send(user1)
})

// Export the router
export default router

