const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({ data: "here is your comment"});
});

router.post("/", (req, res) => {
    res.send({ data: "here is your comment"})
});

router.put("/", (req, res) => {
    res.send({ data: "here is your comment"})
});

router.delete("/", (req, res) => {
res.send({ data: "here is your comment"})
});



module.exports = router;