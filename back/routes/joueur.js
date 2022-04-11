const router = require("express").Router();
const joueur = require("../controller/joueur");

router.post("/joueur/:token", joueur.register);
router.post("/joueur/", joueur.login);
module.exports = router;
