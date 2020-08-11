import dbConnect from "../../../utils/dbConnect";
import Users from "../../../models/users";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;
  console.log("hey");
  switch (method) {
    case "POST":
      try {
        const user = await Users.findOne({ email: body.email });

        const validPassword = await bcrypt.compare(
          body.password,
          user.password
        );

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
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(200).json({ success: false, no: "not" });
  }
};
