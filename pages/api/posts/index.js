import dbConnect from "../../../utils/dbConnect";
import Posts from "../../../models/post";

dbConnect();

export default async (req, res) => {
  const { method, body } = req;

  switch (method) {
    case "GET":
      try {
        const posts = await Posts.find({});
        res.status(200).json({ success: true, data: posts });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const newPost = await Posts.create(body);
        res.status(200).json({ success: true, data: newPost });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
