const router = require("express").Router();
const CompetenceController = require("../controller/competence.controller");

router.get("/", CompetenceController.readcompetence);
router.post("/", CompetenceController.createcompetence);
router.put("/:id", CompetenceController.updatecompetence);
router.delete("/:id", CompetenceController.deletecompetence);

module.exports = router;
