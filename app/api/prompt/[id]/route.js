// get posts

import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const post = await Prompt.findById(params.id).populate("creater");

    if (!post) {
      return new Response("Data not Found !", { status: 500 });
    }
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};

// update post

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();
  try {
    await connectToDB();
    const existingPost = await Prompt.findById(params.id);

    if (!existingPost) {
      return new Response("Data not found", { status: 404 });
    }
    // updata data.
    existingPost.prompt = prompt;
    existingPost.tag = tag;

    await existingPost.save();

    return new Response("Prompt Updated Successfully", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Prompt", { status: 404 });
  }
};

// delete posts

export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await Prompt.findByIdAndRemove(params.id);
    return new Response("Prompt Deleted Successfully ", { status: 200 });
  } catch (error) {
    return new Response("Error Deleting Prompt", { status: 500 });
  }
};
