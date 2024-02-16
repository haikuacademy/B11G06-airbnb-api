import { Router } from "express";
const router = Router();

// Define a GET route for fetching the list of products
router.get("/authorizations", (req, res) => {
  res.send("List of authorizations");
});

// Define a GET route for fetching a single user
router.get("/signup", (req, res) => {
  res.send("signup");
});

router.get("/login", (req, res) => {
  res.send("login");
});

router.get("/logout", (req, res) => {
  res.send("logout");
});

// Export the router
export default router;
