var mongoose    = require("mongoose");

var transactionSchema = mongoose.Schema({
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
});

module.exports = mongoose.model("Transaction", transactionSchema);