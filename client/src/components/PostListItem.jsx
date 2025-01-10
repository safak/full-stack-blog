import { Link } from "react-router-dom";
import Image from "./Image";
import { format } from "timeago.js";

const PostListItem = ({ post }) => {
    console.log(post.img);
    return (
        <div className="rounded-2xl bg-white shadow-lg p-8 flex flex-col xl:flex-row gap-4 mb-12">
            <div className="md:hidden xl:block xl:w-1/3">
                {post.img ? 
                    <Image src={post.img} className="rounded-2xl object-cover" w="735" h="500"/> : 
                    <Image src="/empty.jpg" className="rounded-2xl object-cover" w="735" h="500"/>
                }
            </div>
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to={`/${post.slug}`}  className="text-4xl font-semibold">{post.title}</Link>
                <div className="flex items-cernter gap-2 text-gray-500 text-sm">
                    <span className="text-secondary-text-color">Written by</span>
                    <Link className="text-blue-800 hover:text-blue-600" to={`/posts?author=${post.user.username}`}>{post.user.username}</Link>
                    <span className="text-secondary-text-color">on</span>
                    <Link className="text-blue-800 hover:text-blue-600" to={`/posts?cat=${post.category}`}>{post.category}</Link>
                    <span className="text-secondary-text-color">{format(post.createdAt)}</span>
                </div>
                <p>{post.desc}</p>
                <Link to={`/${post.slug}`} className="underline text-blue-800 text-sm hover:text-blue-600">
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default PostListItem;