import { Schema, model, models } from "mongoose";

const promptSchema = new Schema({
  creater: {
    type: Schema.Types.ObjectId,
    ref: "User",
    match: [Schema.Types.ObjectId],
  },
  prompt: {
    type: String,
    required: [true, "Prompt is Required"],
  },
  tag: {
    type: String,
    required: [true, "Prompt is Required"],
  },
});

const Prompt = models.Prompt || model("Prompt", promptSchema);
export default Prompt;
