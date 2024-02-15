import express from 'express'
import users from './routes/usersRoutes.js'
const app = express()

app.use(users)
app.listen(4100, () => console.log('Airbnb API ready on localhost:4100'))

