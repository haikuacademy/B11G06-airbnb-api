import express from "express";
const app = express();

// Modules

import reviewsRouter from "./routes/reviewsRoutes.js";
import bookingsRoutes from "./routes/bookingsRoutes.js";
import photosRouter from "./routes/photosroutes.js";
import authRouter from "./routes/authRoutes.js";

// Use routes
app.use(reviewsRouter);
app.use(bookingsRoutes);
app.use(photosRouter);
app.use(authRouter);

// Server
app.listen(4100, () => {
  console.log("Airbnb API ready on localhost:4100");
});
