const router = require("express").Router();
const Invitation = require("../controller/invitation");
router.post("/:token", Invitation.inviterJoueur);
module.exports = router;
