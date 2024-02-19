import { Router } from "express";
const router = Router();

// Define a GET route for fetching the list of products
router.get("/reviews", (req, res) => {
  res.json("List of reviews");
});

// Define a GET route for fetching a single user
router.get("/reviews/1", (req, res) => {
  res.json({ reviewId: 1, rating: 5 });
});

// Export the route
export default router;
