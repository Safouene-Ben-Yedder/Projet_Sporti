const router = require("express").Router();
const joueur = require("../controller/joueur");

router.post("/joueur/:token", joueur.register);
router.post("/joueur/", joueur.login);
router.get("/joueur/:token", joueur.showProfile);
router.put("/joueur/:token", joueur.editProfile);

module.exports = router;
