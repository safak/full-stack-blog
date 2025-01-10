import { useState } from "react";
import PostList from "../components/PostList";
import SideMenu from "../components/SideMenu";
import MainCategories from "../components/MainCategories" 
import { useSearchParams } from "react-router-dom";

const PostListPage = () => {
    const [open, setOpen] = useState();
    const [searchParams, setSearchParams] = useSearchParams();

    const curr_category = searchParams.get("cat");
    let category_obj = {
        title: "",
        description: ""
    };

    switch (curr_category) {
        case "frontend":
            category_obj.title = "Frontend";
            category_obj.description = "Explore the world of frontend technologies";
            break;
        case "backend":
            category_obj.title = "Backend";
            category_obj.description = "Explore the world of backend technologies";
            break;
        case "database":
            category_obj.title = "Database";
            category_obj.description = "Explore how data is managed in databases";
            break;
        case "cloud-services":
            category_obj.title = "Cloud Services";
            category_obj.description = "Explore how cloud services all applications to scale";
            break;
        case "development-tools":
            category_obj.title = "Development Tools";
            category_obj.description = "Explore the latest and greatest development tools";
            break;
        default:
            category_obj.title = "Explore";
            category_obj.description = "Choose from a wide range of topics to explore";
            break;
    }

    return (
        <div className="flex flex-col gap-2 mt-8">
            <div className="">
                <h1 className="text-gray-800 text-xl md:text-3xl lg:text-4xl font-bold">
                    {category_obj.title}
                </h1>
                <p className="text-secondary-text-color font-medium text-md md:text-xl mt-4 mb-4">
                    {category_obj.description}
                </p>
            </div>
            <MainCategories />
            <button className="bg-blue-800 text-sm px-4 py-2 rounded-2xl mb-4 md:hidden" onClick={() => setOpen((prev) => !prev)}>
                {open ? "Close" : "Filter or Search"}
            </button>
            <div className="flex flex-col-reverse gap-8 mt-12 md:flex-row w-full">
                <div className="w-3/4">
                    <PostList />
                </div>
                <div className={`${open ? "block" : "hidden"} md:block w-1/4`}>
                    <SideMenu />
                </div>
            </div>
        </div>
    )
}

export default PostListPage;