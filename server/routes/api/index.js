import express from "express";
import buildings from "./buildings.js"
import users from "./users.js"

const router = express.Router();
// api/
router.use("/buildings", buildings);
router.use("/users", users)

export default router;