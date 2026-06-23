import { NavLink } from "react-router";


const NavBar = () => {
    const links = <>
        <li><NavLink
            to={"/"}
            className={({ isActive }) => `mx-2 ${isActive ? "text-green-500 border border-green-500" : "btn"}`}
        >Home</NavLink></li>
        <li><NavLink
            to={"/books"}
            className={({ isActive }) => `mx-2 ${isActive ? "text-green-500 border border-green-500" : "btn"}`}
        >Listed Books</NavLink></li>
        <li><NavLink
            to={"/ReadPage"}
            className={({ isActive }) => `mx-2 ${isActive ? "text-green-500 border border-green-500" : "btn"}`}
        >Pages to Read</NavLink></li>
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
                    {/* <Image
                        src="/logo.png"
                        alt='logo icon'
                        width="144"
                        height="31"
                        className='w-auto h-auto'
                    ></Image> */}
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