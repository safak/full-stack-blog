import { Link, useSearchParams } from "react-router-dom";
import Search from "./Search";

const MainCategories = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    
    return (
        <div className="bg-white rounded-3xl md:flex xl:rounded-full shadow-lg items-center p-4 gap-8">
            <div className="flex-1 flex items-center justify-center flex-wrap">
                <Link to="/posts" className={` ${searchParams.get("cat") ? "hover:bg-blue-50" : "bg-blue-800 text-white"} rounded-full px-4 py-2`}>
                    All Posts
                </Link>
                <Link to="/posts?cat=frontend" className={` ${searchParams.get("cat") === "frontend" ? "bg-blue-800 text-white" : "hover:bg-blue-50"} rounded-full px-4 py-2`}>
                    Frontend
                </Link>
                <Link to="/posts?cat=backend"  className={` ${searchParams.get("cat") === "backend" ? "bg-blue-800 text-white" : "hover:bg-blue-50"} rounded-full px-4 py-2`}>
                    Backend
                </Link>
                <Link to="/posts?cat=database"  className={` ${searchParams.get("cat") === "database" ? "bg-blue-800 text-white" : "hover:bg-blue-50"} rounded-full px-4 py-2`}>
                    Database
                </Link>
                <Link to="/posts?cat=cloud-services" className={` ${searchParams.get("cat") === "cloud-services" ? "bg-blue-800 text-white" : "hover:bg-blue-50"} rounded-full px-4 py-2`}>
                    Cloud Services
                </Link>
                <Link to="/posts?cat=development-tools"  className={` ${searchParams.get("cat") === "development-tools" ? "bg-blue-800 text-white" : "hover:bg-blue-50"} rounded-full px-4 py-2`}>
                    Development Tools
                </Link>
            </div>
            <span className="text-xl font-medium">|</span>
            <Search />
        </div>
    )
}

export default MainCategories;