const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    maxlength: 100,
  },
  body: {
    type: String,
    required: [true, "Body is required"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
  },
});

module.exports = mongoose.models.post || mongoose.model("post", PostSchema);
