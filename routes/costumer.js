var express     = require("express"),
    router      = express.Router(),
    wallet      = require("ethereumjs-wallet"),
    web3        = require('web3');
    Costumer    = require("../models/costumer");

var webjs = new web3(new web3.providers.WebsocketProvider('https://ropsten.infura.io/v3/d522d8be6db4449a96cb87ee171fed5b'));

// get 
router.get("/", function(req, res){
    
    Costumer.find({}, function(err, costumers){
        if(err){
            console.log(err);
        } else {
            res.json(costumers);
        }
    })
})

//post
router.post("/", function(req, res){

    console.log(req.body);
   
    req.body.forEach(costumer => {
        Costumer.create(costumer, function(err, newCostumer){
            if(err){
                console.log(err);
            } else {
                let newWallet = webjs.eth.accounts.create();
                newCostumer.wallet = newWallet;
                newCostumer.save();
            }
        })
    });

    Costumer.find({}, function(err, costumers){
            if(err){
                console.log(err);
            } else {
                res.json(costumers);
            }
        })
    })
    
module.exports = router;