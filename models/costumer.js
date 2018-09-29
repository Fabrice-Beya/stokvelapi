var mongoose    = require("mongoose");

var costumerSchema = mongoose.Schema({
   name1 : String,
   mobilePhoneNumber: String,
   identityNumber: String,
   wallet: Object
});

module.exports = mongoose.model("Costumer", costumerSchema);