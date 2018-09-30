var mongoose    = require("mongoose"),
    Costumer       = require("./models/costumer"),
    Transaction       = require("./models/transaction"),
    Stokvel = require("./models/stokvel");

 var transactionData = [
   {
    fromWallet : {
        address: "0xa8dC9a9460d7a85C1CD3Bf322FC21CD3f3Cb2e33",
        privateKey: "",
        name: "Fabrice Beya",
       },
       toWallet : {
        address: "0xa8dC9a9460d7a85C1CD3Bf322FC21CD3f3Cb2e22",
        privateKey: "",
        name: "Ned Man",
       },
       date: Date.now(),
       value: 100,
       status: "Success"
   },
   {
    fromWallet : {
        address: "0xa8dC9a9460d7a85C1CD3Bf322FC21CD3f3Cb2e33",
        privateKey: "",
        name: "Sebastien Diyanti",
       },
       toWallet : {
        address: "0xa8dC9a9460d7a85C1CD3Bf322FC21CD3f3Cb2e22",
        privateKey: "",
        name: "Fabrice Trueman",
       },
       date: Date.now(),
       value: 100,
       status: "Success"
   }
]


function seedDB(){

    Transaction.remove({},function(err){
        if(err){
            console.log(err);
        } else {
            transactionData.forEach(transaction =>{
                Transaction.create(transaction, function(err, transaction){
                    if(err){
                        console.log(err);
                    } else {
                        
                    }
                })
            })  
        }
    });

   
}

 module.exports = seedDB;