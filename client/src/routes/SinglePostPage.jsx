import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";

const fetchPost = async (slug) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
    return res.data;
}

const SinglePostPage = () => {
    const { slug } = useParams();
    const { isLoading, error, data } = useQuery({
        queryKey: ["post", slug],
        queryFn: () => fetchPost(slug),
    });

    if (isLoading) return "Loading...";

    if (error) return "An error has occured" + error.message;

    if (!data) return "Post not found";

    return (
        <div className="flex flex-col gap-8">
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl">
                        {data.title}
                    </h1>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>Written by</span>
                        <Link className="text-blue-800">{data.user.username}</Link>
                        <span>on</span>
                        <Link className="text-blue-800">{data.category}</Link>
                        <span>{format(data.createdAt)}</span>
                    </div>
                    <p className="text-gray-500 font-medium">
                        {data.desc}
                    </p>
                </div>
                {data.img && <div className="hidden lg:block w-2/5">
                    <Image src="postImg.jpeg" className="rounded-2xl" w="600" />
                </div>}
            </div>
            <div className="flex flex-col md:flex-row gap-12">
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    {data.content}
                </div>
                <div className="px-4 h-max sticky top-8">
                    <h1 className="mb-4 text-sm font-medium">Author</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-8">
                            {data.user.image && <Image 
                                src={data.user.img} 
                                className="w-12 h-12 rounded-full object-cover" 
                                w="48" 
                                h="48"
                            />}
                            <Link className="text-blue-800">{data.user.username}</Link>
                        </div>
                        <p className="text-sm text-gray-500">This is the author of this blog post</p>
                        <div className="flex gap-2">
                            <Link>
                                <Image src="facebook.svg"/>
                            </Link>
                            <Link>
                                <Image src="instagram.svg"/>
                            </Link>
                        </div>
                    </div>
                    <PostMenuActions post={data}/>
                    <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link to="/" className="underline">All</Link>
                        <Link to="/" className="underline">Web Desgin</Link>
                        <Link to="/" className="underline">Development</Link>
                        <Link to="/" className="underline">Database</Link>
                        <Link to="/" className="underline">Search Engines</Link>
                        <Link to="/" className="underline">Marketing</Link>
                    </div>
                    <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
                    <Search />
                </div>
            </div>
            <Comments postId={data._id}/>
        </div>
    )
}

export default SinglePostPage;