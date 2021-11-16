const { db } = require("../util/admin");
// const config = require("../util/config");
// const firebase = require("firebase");

// firebase.initializeApp(config);
const { validateEmail } = require("../util/validators");

// Sign users up
exports.signup = (req, res) => {
  const newUser = {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    message: req.body.message,
    address: req.body.address,
    dateOfBirth: req.body.birthday,
    choice: req.body.choice,
    choicePicture: req.body.choicePicture,
    choice2: req.body.choice2,
  };

  db.collection("users")
    .add(newUser)
    .then(() => {
      res.json({});
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
};

exports.checkEmail = (req, res) => {
  const email = req.query.email;
  console.log(req.query);
  const valid = validateEmail(email);
  console.log(valid);
  if (!valid)
    return res.status(400).json({ error: "Must be a valid email address" });

  db.collection("users")
    .get()
    .then((data) => {
      data.forEach((doc) => {
        if (email === doc.data().email) {
          return res.status(400).json({ error: "Email already in use" });
        }
      });
      return res.json({});
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
};
