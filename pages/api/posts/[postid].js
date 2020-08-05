import dbConnect from "../../../utils/dbConnect";
import Posts from "../../../models/post";

dbConnect();

export default async (req, res) => {
  const {
    method,
    body,
    query: { postid },
  } = req;

  console.log();

  switch (method) {
    case "DELETE":
      try {
        const post = await Posts.findByIdAndRemove(postid);
        res.status(200).json({ success: true, data: post });
      } catch (err) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const newPost = await Posts.findByIdAndUpdate(postid, body, {
          new: true,
        });
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
