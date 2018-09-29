var mongoose    = require("mongoose");

var costumerSchema = mongoose.Schema({
   name1 : String,
   mobilePhoneNumber: String,
   identityNumber: String,
   wallet: {
       _privKey: String,
       _pubKey: String
   },
   rawWallet : Object
});

module.exports = mongoose.model("Costumer", costumerSchema);