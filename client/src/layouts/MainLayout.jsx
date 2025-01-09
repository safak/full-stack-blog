import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
        <div className="px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64">
            <NavBar />
            <Outlet/>
        </div>
    )
}

export default MainLayout;