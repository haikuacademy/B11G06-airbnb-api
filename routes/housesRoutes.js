import { Router } from 'express'
const router = Router()
import db from '../db.js'

router.get('/houses', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM houses')
        console.log(rows)
        res.json(rows)
    } catch (err) {
        console.error(err.message)
        res.json(err)
    }
})

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
})

export default router