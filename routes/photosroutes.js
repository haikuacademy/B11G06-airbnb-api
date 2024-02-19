import { Router } from "express";
const router = Router();

// Define a GET route for fetching the list of users
router.get("/photos", (req, res) => {
  res.json([
    {
      photo_id: "1",
      url: "https://images.pexels.com/photos/2869503/pexels-photo-2869503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      photo_id: "2",
      url: "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]);
});

// Define a GET route for fetching a single user
router.get("/photos/1", (req, res) => {
  res.json({
    photo_id: "1",
    url: "https://images.pexels.com/photos/2869503/pexels-photo-2869503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  });
});

// Export the router
export default router;
