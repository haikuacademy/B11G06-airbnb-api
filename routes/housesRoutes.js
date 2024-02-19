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

router.get('/houses/1', (req, res) => {
    const house1 = [
        {id: 1, price: 100}
    ]
    res.json(house1)
})

export default router