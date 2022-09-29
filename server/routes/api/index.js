import express from "express";
import buildings from "./buildings.js"

const router = express.Router();
// api/
router.use("/buildings", buildings);

export default router;