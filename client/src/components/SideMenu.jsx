import { Link, useSearchParams } from "react-router-dom";
import Search from "./Search";

const SideMenu = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleFilterChange = (e) => {
        if (searchParams.get("sort") !== e.target.value) {
            setSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                sort: e.target.value,
            })
        }
    }

    const handleCategoryChange = (category) => {
        if (searchParams.get("cat") !== category) {
            setSearchParams({
                ...Object.fromEntries(searchParams.entries()),
                cat: category,
            })
        }
    }

    return (
        <div className="rounded-2xl bg-white shadow-lg p-4 h-max sticky top-8">
            <h1 className="mb-4 text-sm font-medium text-primary-text-color">Search</h1>
            <Search />
            <h1 className="mt-8 mb-4 text-sm font-medium text-primary-text-color">Filters</h1>
            <div className="flex flex-col gap-2 text-sm">
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="newest" onChange={handleFilterChange} className="text-primary-text-color appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"/>
                    Newest
                </label>
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="popular" onChange={handleFilterChange} className="text-primary-text-color appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"/>
                    Most Popular
                </label>
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="trending" onChange={handleFilterChange} className="text-primary-text-color appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"/>
                    Trending
                </label>
                <label htmlFor="" className="flex items-center gap-2 cursor-pointer">
                    <input type="radio" name="sort" value="oldest" onChange={handleFilterChange} className="text-primary-text-color appearance-none w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm bg-white checked:bg-blue-800"/>
                    Oldest
                </label>
            </div>
            <h1 className="mt-8 mb-4 text-sm font-medium text-primary-text-color">Categories</h1>
            <div className="flex flex-col gap-2 text-sm">
                <Link className="underline cursor-pointer text-blue-800 hover:text-blue-600" onClick={() => handleCategoryChange("")}>All Posts</Link>
                <Link className="underline cursor-pointer text-blue-800 hover:text-blue-600" onClick={() => handleCategoryChange("frontend")}>Frontend</Link>
                <Link className="underline cursor-pointer text-blue-800 hover:text-blue-600" onClick={() => handleCategoryChange("backend")}>Backend</Link>
                <Link className="underline cursor-pointer text-blue-800 hover:text-blue-600" onClick={() => handleCategoryChange("database")}>Database</Link>
                <Link className="underline cursor-pointer text-blue-800 hover:text-blue-600" onClick={() => handleCategoryChange("cloud-services")}>Cloud Services</Link>
                <Link className="underline cursor-pointer text-blue-800 hover:text-blue-600" onClick={() => handleCategoryChange("development-tools")}>Development Tools</Link>
            </div>
        </div>
    )
}

export default SideMenu;