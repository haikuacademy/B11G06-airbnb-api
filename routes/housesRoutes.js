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
        const houseId = await db.query(`SELECT * FROM houses WHERE house_id = ${req.params.houseId}`)
        res.json(houseId.rows[0])
    } catch (err) {
        console.error(err.message)
        res.json(err)
        }
})

export default router