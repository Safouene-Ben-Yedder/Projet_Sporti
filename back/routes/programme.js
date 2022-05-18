const router = require("express").Router();
const programme = require("../controller/programmeSeance");

router.post("/:token", programme.create);
router.get("/find/:token/:id", programme.find);
router.get("/findAll/:token/", programme.findAll);
router.put("/update/:token/:id", programme.update);
router.delete("/delete/:token/:id", programme.delete);

module.exports = router;
