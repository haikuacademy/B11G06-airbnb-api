import express from 'express'
import users from './routes/usersRoutes.js'
import houses from './routes/housesRoutes.js'
const app = express()

app.use(users)
app.use(houses)

app.listen(4100, () => console.log('Airbnb API ready on localhost:4100'))

