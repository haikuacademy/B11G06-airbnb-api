import express from 'express'
const app = express()

import reviewsRouter from './routes/reviewRoutes.js'

app.use(reviewsRouter)

app.listen(4100, () => console.log('Airbnb API ready on localhost:4100'))
