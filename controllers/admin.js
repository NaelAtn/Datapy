const Admin = require("../model/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginAdmin = async (req, res) => {
  try {
    const { name, password } = req.body;
    const foundAdmin = await Admin.findOne({ name });
    if (!foundAdmin) {
      return res.status(400).send({ errors: [{ msg: "bad credential !!" }] });
    }
    const checkPassword = await bcrypt.compare(password, foundAdmin.password);
    if (!checkPassword) {
      return res.status(400).send({ errors: [{ msg: "bad credential !!" }] });
    }
    const token = jwt.sign(
      {
        id: foundAdmin._id,
      },
      process.env.SCRT_KEY,
      { expiresIn: "168h" }
    );
    res
      .status(200)
      .send({success : [{msg: "Login sucess... welcome back"}], user: foundAdmin, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "Can not find this admin !!" }] });
  }
};
