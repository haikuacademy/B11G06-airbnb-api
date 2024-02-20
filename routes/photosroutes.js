import { Router } from 'express'
const router = Router()
import db from '../db.js' // import the database connection

// // Define a GET route for fetching the list of users
// router.get('/photos', async (req, res) => {
//   try {
//     const photos = [
//       {
//         photo_id: '1',
//         url: 'https://images.pexels.com/photos/2869503/pexels-photo-2869503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//       },
//       {
//         photo_id: '2',
//         url: 'https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//       }
//     ]
//     res.json(photos)
//   } catch (error) {
//     console.error('Error fetching photos:', error)
//     res.status(500).send('Internal Server Error')
//   }
// })

// // Define a GET route for fetching a single user
// router.get('/photos/1', (req, res) => {
//   res.json({
//     photo_id: '1',
//     url: 'https://images.pexels.com/photos/2869503/pexels-photo-2869503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   })
// })

// router.get('/photos/2', (req, res) => {
//   res.json({
//     photo_id: '2',
//     url: 'https://images.pexels.com/photos/2869503/pexels-photo-2869503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   })
// })

// // API
// router.get('/photos/:photo_id', async (req, res) => {
//   let photo_id = req.params.photo_id

//   console.log(photo_id) // 700
//   res.json(`Profile page for user with ID: ${photo_id}`)
// })
// // Express Route Parameters
// router.get('/photos/:photo_id', async (req, res) => {
//   const { rows } = await db.query(
//     `SELECT * FROM photos WHERE photo_id = ${req.params.photo_id}`
//   )
//   res.json(rows)
// })
// // Export the router
// export default router

// const express = require('express')
// const router = express.Router()

// Simulated database or data source

// const photos = [
//   {
//     photo_id: '1',
//     url: 'https://images.pexels.com/photos/2869503/pexels-photo-2869503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   },
//   {
//     photo_id: '2',
//     url: 'https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
//   }
// ]

// Route to fetch all photos
router.get('/house_photos', async (req, res) => {
  try {
    res.json(house_photos)
  } catch (error) {
    console.error('Error fetching photos:', error)
    res.status(500).send('Internal Server Error')
  }
})

// Route to fetch a specific photo by photo_id
router.get('/house_photos/:photo_id', async (req, res) => {
  try {
    const photoId = req.params.photo_id
    const photo = house_photos.find((p) => p.photo_id === photoId)

    if (photo) {
      res.json(photo)
    } else {
      res.status(404).json({ message: 'Photo not found' })
    }
  } catch (error) {
    console.error('Error fetching photo:', error)
    res.status(500).send('Internal Server Error')
  }
})

// module.exports = router
export default router
