import { Link } from "react-router-dom";
import FeaturedPosts from "../components/FeaturedPosts";
import PostList from "../components/PostList";

const HomePage = () => {
    return (
        <div className="mt-8 flex flex-col gap-4">
            <div className="rounded-2xl bg-white shadow-lg p-6 flex items-center justify-between">
                <div className="">
                    <h1 className="text-primary-text-color text-xl md:text-4xl lg:text-5xl font-bold">
                        Home
                    </h1>
                    <p className="text-secondary-text-color font-medium mt-6 text-md md:text-xl">
                        Explore and share all things tech related.
                    </p>
                </div>
                <Link to="/write" className=" hidden md:block relative">
                    <svg
                        viewBox="0 0 200 200"
                        width="150"
                        height= "150"
                        className="text-lg tracking-widest animate-spin animatedButton"
                    >
                        <path
                            id="circlePath"
                            fill="none"
                            d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"
                        />
                        <text>
                            <textPath href="#circlePath" startOffset="0%">
                                This is a blog site
                            </textPath>
                            <textPath href="#circlePath" startOffset="50%" >
                                Share your ideas
                            </textPath>
                        </text>
                    </svg>
                    <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="50"
                            height="50"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                        >
                            <line x1="6" y1="18" x2="18" y2="6"/>
                            <polyline points="9 6 18 6 18 15"/>
                        </svg>
                    </button>
                </Link>
            </div>
            <div className="mt-4">
                <h1 className="text-2xl text-primary-text-color mb-4">Featured Posts</h1>
                <FeaturedPosts />
            </div>
            <div className="mt-4">
                <h1 className="text-2xl text-primary-text-color mb-4">Recent Posts</h1>
                <PostList />
            </div>
        </div>
    )
}

export default HomePage;