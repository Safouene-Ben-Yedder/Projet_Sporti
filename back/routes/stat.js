const router = require("express").Router();
const statController = require("../controller/stat.controller");

router.get("/", statController.readstat);
router.post("/", statController.createstat);
router.put("/:id", statController.updatestat);
router.delete("/:id", statController.deletestat);

module.exports = router;
