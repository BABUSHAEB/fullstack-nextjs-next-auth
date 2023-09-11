import { Schema, model, models } from "mongoose";

const blogsSchema = new Schema({
  creater: {
    type: Schema.Types.ObjectId,
    ref: "User",
    match: [Schema.Types.ObjectId],
  },
  blogtitle: {
    type: String,
    required: [true, "Blog Title is Required"],
  },
  slug: {
    type: String,
    required: [true, "Slug is Required"],
    unique: [true, "Slug already exists!"],
  },
  blogdetails: {
    type: String,
    required: [true, "Details is Required"],
  },
  tag: {
    type: String,
    required: [true, "tags is Required"],
  },
});

const Blog = models.Blog || model("Blog", blogsSchema);
export default Blog;
