var express     = require("express"),
    router      = express.Router(),
    web3        = require('web3');
    Transaction    = require("../models/transaction"),
    TransactionController = require("../controllers/transaction"),
    Costumer    = require("../models/costumer");

var webjs = new web3(new web3.providers.WebsocketProvider('https://ropsten.infura.io/v3/d522d8be6db4449a96cb87ee171fed5b'));

// get

// get 
router.route("/")
.get(TransactionController.getAll)

router.post("/", function(req, res){
    TransactionController.createTransaction(req, res);
})

//post
router.post("/deposit", function(req, res){
    TransactionController.deposit(req, res);
})
    
module.exports = router;