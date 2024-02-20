import { Router } from 'express'
const router = Router()
import db from '../db.js'
import { clearConfigCache } from 'prettier'




//HOUSE ID ROUTE
router.get('/houses/:results', async (req, res) => {
    try {
        const results = await db.query(`SELECT * FROM houses WHERE house_id = ${req.params.house_id}`)
        if (!results.rows.length) {
            throw new Error('House not found')
        }
        res.json(results.rows[0])
    } catch (err) {
        console.error(err.message)
        res.json(err.message)
    }
})

router.get('/houses', async (req, res) => {
    try {
        let string = 'SELECT * FROM houses'
        if (req.query.location) {
            string += ` WHERE location LIKE '%${req.query.location}%'`
        } if (req.query.max_price) {
            string += ` AND price_night <= ${req.query.max_price}`
        } if (req.query.min_rooms) {
            string += ` AND bedrooms >= ${req.query.min_rooms}`
        } if (req.query.search) {
            string += ` AND description LIKE '%${req.query.search}%'`
        } if (req.query.category) {
            string += ` ORDER BY ${category}`
        } if (req.query.category) {
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