import { Router } from 'express'
const router = Router()
import db from '../db.js'
import { clearConfigCache } from 'prettier'


OG HOUSES ROUTE
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

HOUSE ID ROUTE
router.get('/houses/:results', async (req, res) => {
    try {
        const results = await db.query(`SELECT * FROM houses WHERE house_id = ${req.params.results}`)
        if (!results.rows.length) {
            throw new Error('House not found')
        }
        res.json(results.rows[0])
    } catch (err) {
        console.error(err.message)
        res.json(err.message)
    }
})


//EXACT LOCATION
//router.get('/houses', async (req, res) => {
//     try {
//         console.log(req.query)
//         const location = req.query.location
//         const { rows } = await db.query(
//             `SELECT * FROM houses WHERE location LIKE '%${location}%'`
//         )
//         if (!rows.length) {
//             throw new Error('There are no houses in that location')
//         }
//         res.json(rows)
//     } catch (err) {
//         console.error(err.message)
//         res.json(err.message)
//     }
// })

//MAX PRICE
// router.get('/houses', async (req, res) => {
//     try {
//         console.log(req.query)
//         const max_price = req.query.max_price
//         const { rows } = await db.query(
//             `SELECT * FROM houses WHERE price_night <= ${max_price}`
//         )
//         if (!rows.length) {
//             throw new Error('There are no houses below that price')
//         }
//         res.json(rows)
//     } catch (err) {
//         console.error(err.message)
//         res.json(err.message)
//     }
// })

//MIN ROOMS
// router.get('/houses', async (req, res) => {
//     try {
//         console.log(req.query)
//         const min_rooms = req.query.min_rooms
//         const { rows } = await db.query(`
//     SELECT * FROM houses WHERE bedrooms >= ${min_rooms}
//     `)
//         if (!rows.length) {
//             throw new Error('Sorry, no results')
//         }
//         res.json(rows)
//     } catch (err) {
//         console.log(err.message)
//         res.json(err.message)
//     }
// })

//SEARCH
// router.get('/houses', async (req, res) => {
//     try {
//         console.log(req.query)
//         const search = req.query.search
//         const { rows } = await db.query(`
//     SELECT * FROM houses WHERE description LIKE '%${search}%'
//      `)
//         if (!rows.length) {
//             throw new Error('Sorry, no results')
//         }
//         res.json(rows)
//     } catch (err) {
//         console.log(err.message)
//         res.json(err.message)
//     }
// })





export default router