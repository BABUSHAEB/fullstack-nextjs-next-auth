import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  console.log(params);

  try {
    await connectToDB();
    const posts = await Prompt.find({ creater: params.id }).populate("creater");
    if (!posts) {
      return new Response("Data not found", { status: 404 });
    }
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
