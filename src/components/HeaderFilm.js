import React from "react";


function HeaderFilm() {
    return(
        <div id="nav_div" className="flex w-full fixed top-0 bg-black/30 backdrop-blur-sm px-3 md:px-7 py-2">
            <div className="flex justify-center items-center w-1/6">
                <a className="link px-5 py-3 md:py-0" href="/">
                    <h1 className="text-white font-bold text-2xl md:text-3xl hover:text-blue-500 ease-in-out duration-300">[xd]</h1>
                </a>
            </div>
            <div className="flex justify-end items-center w-5/6">
                <a href="/login">
                    <div id="profile_icon" className="w-8 h-8 bg-black rounded-full cursor-pointer bg-cover bg-center bg-no-repeat select-none"></div>
                </a>
            </div>
        </div>
    );

}

export default HeaderFilm;