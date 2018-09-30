var mongoose    = require("mongoose");

var costumerSchema = mongoose.Schema({
   name1 : String,
   mobilePhoneNumber: String,
   identityNumber: String,
   wallet: Object,
   randBalance: Number,
   tokenBalance:Number
});

module.exports = mongoose.model("Costumer", costumerSchema);