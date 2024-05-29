import express from "express";
import { home, addRoutine, getRoutines } from "../controllers/controller.js";
const router = express.Router();

router.get("/", home);

router.post("/ejercicios", addRoutine);

router.get("/ejercicios", getRoutines);

router.get("*", (req, res) => {
  res.send("404 - page not found");
});

export default router;
