import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();
  console.log(userId, prompt, tag);
  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creater: userId,
      tag,
      prompt,
    });
    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify("Field not matched"), { status: 500 });
    console.log(error);
  }
};
