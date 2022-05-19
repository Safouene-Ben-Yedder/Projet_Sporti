const router = require("express").Router();
const lieu = require("../controller/lieu");

router.post("/:token", lieu.create);
router.put("/update/:token/:id", lieu.update);
router.get("/findAll/:token/", lieu.findAll);
router.delete("/delete/:token/:id", lieu.delete);
router.get("/find/:token/:id", lieu.find);

module.exports = router;
