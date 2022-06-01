const express = require("express")
const router = express.Router()

const giftExchange = {
    gift1: 0,
    gift2: 0,
}

router.get("/", async (req, res, next) => {
    res.status(200).json(giftExchange)
})

router.post("/:giftName", async (req, res, next) => {
    console.log(req.params)

    const giftName = req.params.giftName

    if(giftExchange[giftName] || giftExchange[giftName] === 0){
        giftExchange[giftName]++
    }

    res.status(200).json(giftExchange)
})

module.exports = router