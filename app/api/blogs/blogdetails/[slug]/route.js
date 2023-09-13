import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params: { slug } }) => {
  try {
    await connectToDB();
    const blogsdetail = await Blog.findOne({ slug: slug.toString() }).populate(
      "creater"
    );
    if (blogsdetail.length === 0) {
      return new Response("Data not found !", { status: 404 });
    }
    return new Response(JSON.stringify(blogsdetail), { status: 200 });
  } catch (error) {
    return new Response("Data Not found", { status: 500 });
  }
};
