const router = require("express").Router();
const CompetenceController = require("../controller/competence.controller");

router.get("/find/:token/:id", CompetenceController.readcompetence);
router.get("/findAll/:token", CompetenceController.findAllComp);
router.post("/:token", CompetenceController.createcompetence);
router.put("/update/:token/:id", CompetenceController.updatecompetence);
router.delete("/delete/:token/:id", CompetenceController.deletecompetence);

module.exports = router;
