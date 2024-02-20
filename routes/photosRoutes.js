import { Router } from 'express'
const router = Router()
import db from '../db.js'

// Define a GET route for fetching the list of users
router.get('/house_photos', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM house_photos')
    console.log(rows)
    res.json(rows)
  } catch (err) {
    console.error(error.message)
    res.json(rows)
  }
})

router.get('/house_photos/:photo_id', async (req, res) => {
  try {
    const photoId = await db.query(
      'SELECT * FROM house_photos WHERE photo_id = ${req.params.photoId'
    )
    res.json(photoId.rows[0])
  } catch (err) {
    console.err(err.message)
    res.json(err)
  }
})

// })
// // Define a GET route for fetching a single user
// router.get('/photos/1', (req, res) => {
//   res.json({
//     photo_id: '1',
//     url: 'https://images.pexels.com/photos/2869503/pexels-photo-2869503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   })
// })

// Export the router
export default router
