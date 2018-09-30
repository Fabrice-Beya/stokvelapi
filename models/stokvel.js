var mongoose    = require("mongoose");

var stokvelSchema = mongoose.Schema({
   title : String,
   balance: String,
   cause: String,
   wallet: Object,
   members: [{
    id:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Costumer"
    },
    name1: String,
    balance: Number,
    randBalance: Number,
    tokenBalance: Number,
    Wallet: Object,
    mobilePhoneNumber: String,
    identityNumber: String,
    }],
    transaction: [{
        id:{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Transaction"
        },
        fromWallet : {
            address: String,
            privateKey: String,
            name: String,
           },
           toWallet : {
            address: String,
            privateKey: String,
            name: String,
           },
           date: Date,
           value: Number,
           status: String
    }]
});

module.exports = mongoose.model("Stokvel", stokvelSchema);