const express = require('express');
const router = express.Router();
const axios = require("axios");

/* GET Oracle Quote */
router.get('/oracle', function (req, res, next) {
    const url = "https://mboum.com/api/v1/qu/quote/?symbol=ORCL34.SA&apikey=sBbYvYZa3Q7R36aBDeT2DJKZL0ponzQQJ4VbCinPEsoyy8lNqmEeWPYTXBVI";

    axios.get(url).then(function(resposta) {

        //res.send(CircularJSON.stringify(resposta.data[0]));

        res.send({"Nome": resposta.data[0].longName,
            "regularMarketPrice": resposta.data[0].regularMarketPrice.toString(),
            "symbol": resposta.data[0].symbol});
        res.end();
        console.log(resposta.data[0].longName);
        //console.log(resposta.data[0].regularMarketPrice)
        //console.log(resposta.data[0].symbol)

    })

});

module.exports = router;