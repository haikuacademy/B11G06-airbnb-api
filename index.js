import express from "express";
const app = express();

import reviewsRouter from "./routes/reviewsRoutes.js";

import bookingsRoutes from "./routes/bookingsRoutes.js";

import photosRouter from "./routes/photosRoutes.js";

import authRouter from "./routes/authRoutes.js";

app.use(reviewsRouter);

app.use(bookingsRoutes);

app.use(photosRouter);

app.use(authRouter);

app.listen(4100, () => console.log("Airbnb API ready on localhost:4100"));
