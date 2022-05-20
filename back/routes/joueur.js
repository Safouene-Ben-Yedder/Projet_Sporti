const router = require("express").Router();
const joueur = require("../controller/joueur");

router.post("/register/:token", joueur.register);
router.post("/login/", joueur.login);
router.get("/joueur/:token", joueur.showProfile);
router.put("/joueur/:token", joueur.editProfile);

module.exports = router;
