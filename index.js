import express from "express";
const app = express();

// Import the users router module
import photosRouter from "./routes/photosroutes.js";

// Tell the app to use the user router
app.use(photosRouter);

app.listen(4100, () => console.log(`Server running on port 4100`));
