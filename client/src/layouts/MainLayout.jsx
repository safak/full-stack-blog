import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
    return (
        <>
            <NavBar />
            <div className="md:px-8 lg:px-16 lx:px-32 2xl:px-64">
                <Outlet/>
            </div>
        </>
    )
}

export default MainLayout;