var express     = require("express"),
    wallet      = require("ethereumjs-wallet"),
    web3        = require('web3'),
    CostumerController = require("../controllers/costumer"),
    Transaction    = require("../models/transaction");

var webjs = new web3(new web3.providers.WebsocketProvider('https://ropsten.infura.io/v3/d522d8be6db4449a96cb87ee171fed5b'));


exports.getAll = function(req, res){
    Transaction.find({}, function(err, transactions){
        if(err){
            console.log(err);
        } else {
            res.render("transactions",{transactions:transactions})
        }
    })
}

exports.createTransaction = function(req, res){
    Transaction.create(req.body, function(err, newTransaction){
        if(err){
            console.log(err);
        } else {
            newTransaction.date = Date.now();
            newTransaction.save();
            res.redirect("/api/transaction");
        }
    })
}

exports.deposit = async function(req, res){
    
    var sender = await CostumerController.getCostumerByAdress(req.body.fromAddress);
    // var transObject = {
    //     fromWallet :{
    //         address: sender.wallet.address,
    //         privateKey: sender.wallet.privateKey
    //     },
    //     toWallet :{
    //         address: sender.wallet.address,
    //         privateKey: ""
    //     },
    //     value : transaction.value,
    //     status: transaction.status
    // };

    console.log(sender);
    res.send(sender)
}

transact = function(txObject){

}



module.exports = exports