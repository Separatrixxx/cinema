import React from "react";
import {IoIosSearch} from "react-icons/io";
import { Link } from "react-router-dom";


function Header() {
    return(
        <div id="nav_div" className="flex w-full fixed top-0 bg-black/30 backdrop-blur-sm px-3 md:px-7 py-2">
            <div className="flex justify-center items-center w-1/6">
                <Link className="link px-5 py-3 md:py-0" to="/">
                    <h1 onClick={scrollTop} className="text-white font-bold text-2xl md:text-3xl hover:text-blue-500 ease-in-out duration-300">[xd]</h1>
                </Link>
            </div>
            <div className="flex justify-end items-center w-5/6">
                <label className="relative block mr-5 md:mr-12 rounded-full">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-slate-300 text-md md:text-xl">
                    <IoIosSearch />
                </span>
                    <input
                        className="block shadow-inner md:w-96 h-8 w-44 rounded-full pl-8 p-3 focus:outline-none focus:border-blue-500 focus:ring-blue-5000 focus:ring-1"
                        placeholder="" type="text" name="search"/>
                </label>
                <Link to="/login">
                    <div id="profile_icon" className="w-8 h-8 bg-black rounded-full cursor-pointer bg-cover bg-center bg-no-repeat select-none"></div>
                </Link>
            </div>
        </div>
    );

}

function scrollTop() {
    window.scrollTo(0, 0)
}

export default Header;