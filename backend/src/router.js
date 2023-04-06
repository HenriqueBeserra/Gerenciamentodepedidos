const express = require('express')

const router = express.Router();

router.get("/teste", (req, res) =>{
    res.status(200).send("o router ta online")
});


module.exports = router;