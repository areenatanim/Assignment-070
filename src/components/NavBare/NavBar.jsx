import { NavLink } from "react-router";
import logoImg from "/logo.png"
import { IoHomeOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { TfiStatsUp } from "react-icons/tfi";

const NavBar = () => {
    const links = <>
        <li>
            <NavLink
                to={"/"}
                className={({ isActive }) => `mx-2 ${isActive ? "bg-[#244D3F] text-white" : "btn btn-outline border-[#244D3F]"}`}
            >
                <IoHomeOutline></IoHomeOutline>
                Home</NavLink></li>
        <li>
            <NavLink
                to={"/books"}
                className={({ isActive }) => `mx-2 ${isActive ? "bg-[#244D3F] text-white" : "btn btn-outline border-[#244D3F]"}`}
            >
                <FaRegClock></FaRegClock>
                Timeline</NavLink></li>
        <li>
            <NavLink
                to={"/ReadPage"}
                className={({ isActive }) => `mx-2 ${isActive ? "bg-[#244D3F] text-white" : "btn btn-outline border-[#244D3F]"}`}
            >
                <TfiStatsUp></TfiStatsUp>
                Stats</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className='mx-8'>
                    <img src={logoImg} alt="" srcset="" />
                </div>
            </div>
            <div className="navbar-end hidden lg:flex mx-8 ">
                <ul className="menu menu-horizontal px-1 space-x-3">
                    {links}
                </ul>
            </div>

        </div>
    );
};

export default NavBar;