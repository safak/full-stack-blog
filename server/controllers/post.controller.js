import ImageKit from "imagekit";
import User from "../models/user.model.js"
import Post from "../models/post.model.js"

export const getPosts = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const query = {}

    const category = req.query.cat;
    const author = req.query.author;
    const searchQuery = req.query.search;
    const sortQuery = req.query.sort;
    const featured = req.query.featured;

    if (category) {
        query.category = category;
    }

    if (author) {
        const user = await User.findOne({ username: author }).select("_id");

        if (!user) {
            return res.status(404).json("No post found!");
        }

        query.user = user._id;
    }

    if (searchQuery) {
        query.title = {$regex: searchQuery, $options: "i"};
    }

    let sortObj = {createdAt: -1};

    if (sortQuery) {
        switch (sortQuery) {
            case "newest":
                sortObj = {createdAt: -1};
                break;
            case "oldest":
                sortObj = {createdAt: 1};
                break;
            case "popular":
                sortObj = {visits: -1};
                break;
            case "trending":
                sortObj = {visits: -1};
                query.createdAt = {
                    $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
                }
                break;
            default:
                break;
        }
    }

    if (featured) {
        query.isFeatured = true;
    }

    const posts = await Post.find(query)
        .populate("user", "username")
        .sort(sortObj)
        .limit(limit)
        .skip((page - 1) * limit);

    const totalPosts = await Post.countDocuments();
    const hasMore = page * limit < totalPosts;
    
    res.status(200).json({posts, hasMore});
} 

export const getPost = async (req, res) => {
    const post = await Post.findOne({slug:req.params.slug}).
        populate("user", "username img");
        
    res.status(200).json(post);
}

export const createPost = async (req, res) => {
    const clerkUserId = req.auth.userId;

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({clerkUserId});

    if (!user) {
        return res.status(401).json("User not found!");
    }

    let slug = req.body.title.replace(/ /g, "-").toLowerCase();
    let existingPost = await Post.findOne({slug});
    let counter = 2;

    while (existingPost) {
        slug = `${slug}-${counter}`;
        existingPost = await Post.findOne({slug});
        counter++;
    }

    const newPost = new Post({ user: user._id, slug, ...req.body});
    await newPost.save();

    return res.status(200).json(newPost);
}

export const deletePost = async (req, res) => {
    const clerkUserId = req.auth.userId;

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated");
    }

    const role = req.auth.sessionClaims?.metadata?.role || "user";

    if (role === "admin") {
        await Post.findByIdAndDelete(req.params.id);
        return res.status(200).json("Post has been deleted");
    }

    const user = await User.findOne({ clerkUserId });

    if (!user) {
        return res.status(401).json("User not found!");
    }

    const deletedPost = await Post.findOneAndDelete({_id: req.params.id, user:user._id});

    if (!deletedPost) {
        return res.status(403).json("You can only delete your post");
    }

    return res.status(200).json("Post has been deleted");
}

export const featurePost = async (req, res) => {
    const clerkUserId = req.auth.userId;
    const postId = req.body.postId;

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated");
    }

    const role = req.auth.sessionClaims?.metadata?.role || "user";

    if (role !== "admin") {
        return res.status(200).json("You cannot feature posts");
    }

    const post = await Post.findById(postId);

    if (!post) {
        return res.status(404).json("Post not found");
    }

    const isFeatured = post.isFeatured;
    const updatedPost = await Post.findByIdAndUpdate(postId, {
            isFeatured: !isFeatured,
        }, {
            new: true
        }
    );


    return res.status(200).json(updatedPost); 
}

const imagekit = new ImageKit({
    publicKey: process.env.IK_PUBLIC_KEY,
    privateKey: process.env.IK_PRIVATE_KEY,
    urlEndpoint: process.env.IK_URL_ENDPOINT,
});

export const uploadAuth = async (req, res) => {
    var result = imagekit.getAuthenticationParameters();
    res.send(result);
}