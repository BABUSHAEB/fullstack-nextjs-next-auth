import { connectToDB } from "@utils/database";
import Blog from "@models/blog";

export const POST = async (req) => {
  const { userId, blogtitle, slug, blogdetails, tag } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Blog({
      creater: userId,
      tag,
      blogtitle,
      slug,
      blogdetails,
    });
    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify("Field not matched"), { status: 500 });
  }
};
