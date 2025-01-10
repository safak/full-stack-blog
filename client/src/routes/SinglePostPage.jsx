import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";
import { useQuery } from "@tanstack/react-query";
import { format } from "timeago.js";
import parse from 'react-html-parser';

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
        <div className="mt-8 flex flex-col gap-8">
            <div className="rounded-2xl bg-white shadow-lg flex p-6 gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-primary-text-color text-xl md:text-3xl xl:text-4xl 2xl:text-5xl">
                        {data.title}
                    </h1>
                    <div className="flex items-center gap-2 text-secondary-text-color text-sm">
                        <span className="text-secondary-text-color">Written by</span>
                        <Link className="text-blue-800">{data.user.username}</Link>
                        <span className="text-secondary-text-color">on</span>
                        <Link className="text-blue-800">{data.category}</Link>
                        <span className="text-secondary-text-color">{format(data.createdAt)}</span>
                    </div>
                    <p className="text-primary-text-color font-medium">
                        {data.desc}
                    </p>
                </div>
                <div className="hidden lg:block w-2/5">
                    {data.img ? 
                        <Image src={data.img} className="rounded-2xl" w="600" /> :
                        <Image src="\empty.jpg"className="rounded-2xl" w="600" />
                    }       
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-12 w-full">
                <div className="rounded-2xl bg-white shadow-lg flex p-6 lg:text-lg flex flex-col gap-6 text-justify text-primary-text-color w-3/4">
                    {parse(data.content)}
                </div>
                <div className="rounded-2xl bg-white shadow-lg p-4 h-max sticky top-8 w-1/4">
                    <h1 className="mb-4 text-sm font-medium text-primary-text-color">Author</h1>
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
                        <p className="text-sm text-primary-text-color">This is the author of this blog post</p>
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
                    <h1 className="mt-8 mb-4 text-sm font-medium text-primary-text-color">Categories</h1>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link to="/posts" className="underline cursor-pointer text-blue-800 hover:text-blue-600">All Posts</Link>
                        <Link to="/posts?cat=frontend" className="underline cursor-pointer text-blue-800 hover:text-blue-600">Frontend</Link>
                        <Link to="/posts?cat=backend" className="underline cursor-pointer text-blue-800 hover:text-blue-600">Backend</Link>
                        <Link to="/posts?cat=database" className="underline cursor-pointer text-blue-800 hover:text-blue-600">Database</Link>
                        <Link to="/posts?cat=cloud-services" className="underline cursor-pointer text-blue-800 hover:text-blue-600">Cloud Services</Link>
                        <Link to="/posts?cat=development-tools" className="underline cursor-pointer text-blue-800 hover:text-blue-600">Development Tools</Link>
                    </div>
                    <h1 className="mt-8 mb-4 text-sm font-medium text-primary-text-color">Search</h1>
                    <Search />
                </div>
            </div>
            <Comments postId={data._id}/>
        </div>
    )
}

export default SinglePostPage;