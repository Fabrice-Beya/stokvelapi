var express     = require("express"),
    wallet      = require("ethereumjs-wallet"),
    web3        = require('web3');
    Costumer    = require("../models/costumer");

var webjs = new web3(new web3.providers.WebsocketProvider('https://ropsten.infura.io/v3/d522d8be6db4449a96cb87ee171fed5b'));

exports.getAll = function(req, res){
    Costumer.find({}, function(err, costumers){
        if(err){
            console.log(err);
        } else {
            res.json(costumers);
        }
    })
}

exports.getCostumerByAdress = async function(address){
    Costumer.find({"wallet.address":address}, function(err, costumer){
        if(err){
            console.log(err);
        } else {
            return costumer;
        }
    })
}

exports.createCostumer = function(costumer){
    Costumer.create(costumer, function(err, newCostumer){
        if(err){
            console.log(err);
        } else {
            let newWallet = webjs.eth.accounts.create();
            newCostumer.wallet = newWallet;
            newCostumer.save();
        }
    })
}

exports.createCostumers = function(req, res){
    req.body.forEach(costumer => {
        exports.createCostumer(costumer);
    });
    exports.getAll(req, res);
}

module.exports = exports