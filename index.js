import express from "express";
const app = express();

import users from './routes/usersRoutes.js'
import houses from './routes/housesRoutes.js'
import reviewsRouter from './routes/reviewsRoutes.js'
import bookingsRoutes from './routes/bookingsRoutes.js'
import photosRoutes from './routes/photosRoutes.js'
import auths from './routes/authRoutes.js'

app.use(reviewsRouter)
app.use(photosRoutes)
app.use(bookingsRoutes)
app.use(users)
app.use(houses)
app.use(authRouter)

app.listen(4100, () => console.log('Airbnb API ready on localhost:4100'))
