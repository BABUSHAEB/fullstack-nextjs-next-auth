import Blog from "@models/blog";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const user = await Blog.find({ creater: params.id }).populate("creater");
    if (!user) {
      return new Response("Invalid User ", { status: 404 });
    }
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
