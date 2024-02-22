import { Router } from 'express'
const router = Router()
import db from '../db.js'
import { clearConfigCache } from 'prettier'

//HOUSE ID ROUTE
router.get('/houses/:houseId', async (req, res) => {
    try {
        console.log('yes coming through')
        const { rows } = await db.query(`SELECT * FROM houses WHERE house_id = ${req.params.houseId}`)
        if (rows[0]) {
            res.json(rows[0])
        } else {
            throw new Error('House not found')
        }
    } catch (err) {
        console.error(err.message)
        res.json({error: err.message })
    }
})

router.post('/houses', async (req, res) => { 
    const { user_id, description, location, bedrooms, bathrooms, price_night } = req.body
    console.log('req.body', { user_id, description })
    const queryString = `
        INSERT INTO houses (user_id, description, location, bedrooms, bathrooms, price_night)
        VALUES (${user_id}, '${description}', '${location}', ${bedrooms}, ${bathrooms}, ${price_night})
        RETURNING house_id
    `
    try {
        const result = await db.query(queryString)
        res.send(result.rows[0])
    } catch (e) {
        res.send({error: e.message})
    }

router.get('/houses', async (req, res) => {
  try {
    let string = 'SELECT * FROM houses'
    if (req.query.location) {
      string += ` WHERE location LIKE '%${req.query.location}%'`
    }
    if (req.query.max_price) {
      string += ` AND price_night <= ${req.query.max_price}`
    }
    if (req.query.min_rooms) {
      string += ` AND bedrooms >= ${req.query.min_rooms}`
    }
    if (req.query.search) {
      string += ` AND description LIKE '%${req.query.search}%'`
    }
    if (req.query.category) {
      string += ` ORDER BY ${category}`
    }
    if (req.query.category) {
      string += ` ORDER BY Number(${category}) DESC`
    }
    const { rows } = await db.query(string)
    if (!rows.length) {
      throw new Error('Results not found')
    }
    res.json(rows)
  } catch (err) {
    console.log(err.message)
    res.json(err.message)
  }
})

export default router
