import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);


    const navLinks = <>
        <NavLink className={({ isActive }) => isActive ? 'underline mr-4 text-[#BF964A]' : 'text-black dark:text-white mr-4'} to='/'>Home</NavLink>
        <NavLink className={({ isActive }) => isActive ? 'underline mr-4 text-[#BF964A]' : 'text-black dark:text-white mr-4'} to='/products'>Products</NavLink>
    </>

    // Log out
    // const handleLogOut = () => {
    //     logOut()
    //         .then(() => {
    //             // console.log('logged out successfully')
    //         })
    //         .catch()
    // }

    return (
        <div>
            <div className="navbar bg-base-100 px-2 lg:px-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl">
                            {navLinks}
                        </ul>
                    </div>
                    <h1 className="text-4xl">Cosma</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                <Link to='/login' className="btn mr-5 w-14 lg:w-20 bg-[#FF720F] text-white border-none text-xl">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;