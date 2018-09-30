var express     = require("express"),
    router      = express.Router(),
    CostumerController = require("../controllers/costumer"),

    Costumer    = require("../models/costumer");

// get post
router.route("/")
.get(CostumerController.getAll)
.post(CostumerController.createCostumers)

module.exports = router;