import express from "express";
import buildings from "./buildings.js";
import users from "./users.js";
import apartments from "./apartments.js";

const router = express.Router();

// api/

router.use("/buildings", buildings);
router.use("/users", users);
router.use('/apartments', apartments);

export default router;