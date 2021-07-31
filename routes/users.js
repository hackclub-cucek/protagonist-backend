var express = require("express");
var router = express.Router();

var userHelper = require("../helpers/user-helper"); //user helper

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("The Protagonist : User page");
});

// Handle POST req from front-end
// first req email ID and check is user exist or not
// if not send email verification

router.post("/signup-email", async (req, res) => {
  const email = req.body.email;
  console.log("email:" + email);
  const userCondition = await userHelper.isUser(email);
  if (userCondition === "not a user") {
    const addUserConditon = await userHelper.addUser(email);
    if (addUserConditon === "inserted") {
      console.log("Inserted user");
      res.send("Inserted user email ID " + email);
    }
  }
});

module.exports = router;
