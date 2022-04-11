const router = require("express").Router();
const coach = require("../controller/coach");

router.post("/coach/", coach.register);
router.post("/coach/:token", coach.login);
router.get("/coach/:token", coach.showProfile);
router.put("/coach/:token", coach.abonnement);
router.put("/coach/:token", coach.editProfile);
module.exports = router;
