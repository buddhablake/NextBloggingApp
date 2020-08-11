import dbConnect from "../../../utils/dbConnect";
import Users from "../../../models/users";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "POST":
      try {
        //define level of encryption for password
        const salt = await bcrypt.genSalt(10);
        //encrpyt (hash) the password and return the new hashed value
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //reassign the value of req.body.password
        req.body.password = hashedPassword;

        //create a new user
        const user = await Users.create(body);

        //generate the JWT
        const token = await jwt.sign(
          {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            profileImage: user.profileImage,
          },
          process.env.JWTSECRET
        );

        res.status(200).json({ success: true, token });
      } catch (err) {
        res.status(400).json({ success: false, err: err.message });
      }
      break;
    default:
      res.status(400).json({ success: false });
  }
};
