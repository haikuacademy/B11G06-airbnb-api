import { Router } from "express";
const router = Router();

// Define a GET route for fetching the list of users
router.get("/photos", (req, res) => {
  res.send("List of photos");
});

// Define a GET route for fetching a single user
router.get("/photos/1", (req, res) => {
  res.send("Photo number 1");
});

// Export the router
export default router;
