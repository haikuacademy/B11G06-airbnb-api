import express from 'express'
import users from './routes/usersRoutes.js'
import houses from './routes/housesRoutes.js'
const app = express()

import reviewsRouter from './routes/reviewsRoutes.js'

import bookingsRoutes from './routes/bookingsRoutes.js'

app.use(reviewsRouter)

app.use(bookingsRoutes)
app.use(users)
app.use(houses)

app.listen(4100, () => console.log('Airbnb API ready on localhost:4100'))
