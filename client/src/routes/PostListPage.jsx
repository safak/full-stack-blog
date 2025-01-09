import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";

const PostListPage = () => {
    const [open, setOpen] = useState();

    return (
        <div className="">
            <h1 className="mb-8 text-2xl">Development Blog</h1>
            <button className="bg-blue-800 text-sm px-4 py-2 rounded-2xl mb-4 md:hidden" onClick={() => setOpen((prev) => !prev)}>
                {open ? "Close" : "Filter or Search"}
            </button>
            <div className="flex flex-col-reverse gap-8 md:flex-row">
                <div className="">
                    <PostList />
                </div>
                <div className={`${open ? "block" : "hidden"} md:block`}>
                    <SideMenu />
                </div>
            </div>
        </div>
    )
}

export default PostListPage;