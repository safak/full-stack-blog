import mongoose from "mongoose";
import { Schema } from "mongoose";

const postSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: "User",
        required: true,
    },
    img: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
    },
    desc: {
        type: String,
    },
    category: {
        type: String,
        default: "general",
    },
    content: {
        type: String,
        required: true,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    visits: {
        type: Number,
        default: 0,
    }
}, {timestamps: true});

export default mongoose.model("Post", postSchema);