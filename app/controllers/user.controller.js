const User = require("../models/user.model");
const userController = {};
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

userController.getUser = async (req, res) =>{
  let id = req.params.id;
  let User = await User.findById(id);
  res.json(User);
}
module.exports = userController;