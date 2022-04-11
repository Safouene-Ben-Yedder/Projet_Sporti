const router = require("express").Router();
const Invitation = require("../controller/invitation");
router.post("/", Invitation.inviterJoueur);
module.exports = router;
