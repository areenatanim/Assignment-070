import { Outlet } from "react-router";
import NavBar from "../components/NavBare/NavBar";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;