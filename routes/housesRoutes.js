import { Router } from 'express'
const router = Router()

router.get('/houses', (req, res) => {
    const listOfHouses = [
        { id: 1, price: 100 },
        { id: 2, price: 1000 },
        { id: 3, price: 75 }
    ]
    res.send(listOfHouses)
})

router.get('/houses/1', (req, res) => {
    const house1 = [
        {id: 1, price: 100}
    ]
    res.send(house1)
})

export default router