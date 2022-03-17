const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
//REGISTER

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      nom: req.body.nom,
      prenom: req.body.prenom,
      dateNaissance: req.body.dateNaissance,
      email: req.body.email,
      password: hashedPass,
      poids: req.body.poids,
      taille: req.body.taille,
      droit: req.body.droit,
    });

    const user = await newUser.save();
    res.status(200).json(user);
    console.log(user);
  } catch (err) {
    res.status(500).json(err);
    console.log("erreur");
  }
});
//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json("Wrong credentials!");

    // eslint-disable-next-line no-unused-vars
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;