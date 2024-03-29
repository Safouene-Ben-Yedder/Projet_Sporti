const router = require("express").Router();
const coach = require("../controller/coach");

router.post("/register/", coach.register);
router.post("/login/", coach.login);
router.get("/profile/:token", coach.showProfile);
router.put("/coach/:token", coach.abonnement);
router.put("/coach/update/:id", coach.update);
router.put("/coach/:token", coach.editProfile);
router.get("/:token", coach.playersList);
router.get("/joueur/:token/:id", coach.readPlayer);
module.exports = router;
