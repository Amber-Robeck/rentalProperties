import express from "express";

const router = express.Router()
// api/
router.get("/", (req, res) => {
    res.send('Api routes')
})

export default router;