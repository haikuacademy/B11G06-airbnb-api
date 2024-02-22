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
  const user = await db.query(
    `SELECT * FROM users WHERE user_id = ${req.params.userId}`
  )
  // console.log(user)
  res.json(user.rows[0])
})

router.post('/users', async (req, res) => {
  const { email, password, first_name, last_name, profile_pictureurl } =
    req.body

  console.log('req.body', {
    email,
    password,
    first_name,
    last_name,
    profile_pictureurl
  })

  const queryString = `
        INSERT INTO users (email, password, first_name, last_name, profile_pictureurl)
        VALUES ('${email}', '${password}', '${first_name}', '${last_name}', '${profile_pictureurl}')
        RETURNING user_id
    `
  try {
    console.log(queryString)
    const result = await db.query(queryString)
    console.log(result)
    res.send(result.rows[0])
  } catch (e) {
    res.send({ error: e.message })
  }
})

// Export the router
export default router
