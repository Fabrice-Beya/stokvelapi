var express     = require("express"),
    router      = express.Router(),
    wallet      = require("ethereumjs-wallet"),
    web3        = require('web3');
    Costumer    = require("../models/costumer");

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
                const newWallet = webjs.eth.accounts.create();
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