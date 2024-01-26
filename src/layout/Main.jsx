import { Outlet } from "react-router-dom";
import Navbar from "../pages/Header/NavBar"
import Footer from "../pages/Footer/footer"

const Main = () => {
    return (
        <div>
             <Navbar></Navbar>
             <br />
             <br />
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Main;