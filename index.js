import express from "express";
import users from "./routes/usersRoutes.js";
import houses from "./routes/housesRoutes.js";
const app = express();

import reviewsRouter from "./routes/reviewsRoutes.js";
import bookingsRouter from "./routes/bookingsRoutes.js";
import photosRouter from "./routes/photosRoutes.js";

app.use(users);
app.use(houses);

app.use(reviewsRouter);
app.use(photosRouter);
app.use(bookingsRouter);

app.listen(4100, () => console.log("Airbnb API ready on localhost:4100"));
