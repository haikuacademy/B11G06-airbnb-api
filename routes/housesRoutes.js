import { Router } from 'express'
const router = Router()
import { db } from '../db.js'


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

router.get('/houses/1', async (req, res) => {
    try {
        const { rows } = db.query('SELECT * FROM houses WHERE id = 1')
        console.log(rows)
        res.json(rows)
    } catch (err) {
        console.error(err.message)
        res.json(err)
   }
})

export default router