import express from "express";
import apartments from "./apartments.js"

const router = express.Router();
// api/
router.use("/apartments", apartments);

export default router;