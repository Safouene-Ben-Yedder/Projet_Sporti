const router = require("express").Router();
const statController = require("../controller/stat.controller");

router.get("/find/:token/:id", statController.readstat);
router.get("/findAll/:token/", statController.findAllStats);
router.post("/:token", statController.createstat);
router.put("/update/:token/:id", statController.updatestat);
router.delete("/delete/:token/:id", statController.deletestat);

module.exports = router;
