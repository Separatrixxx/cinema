import React from "react";
import {Link} from "react-router-dom";


function FilmForm3() {
    return(
        <div id="horizontal-scroller-2" className="flex overflow-x-hidden mt-10 mx-10">
            <Link to="/movie">
                <div className="w-64 h-96 bg-red-200 mx-5 rounded-xl hover:bg-red-300 ease-in-out duration-300 cursor-pointer"></div>
            </Link>
            <Link to="/movie">
                <div className="w-72 h-96 bg-orange-200 mx-5 rounded-xl hover:bg-orange-300 ease-in-out duration-300 cursor-pointer"></div>
            </Link>
            <Link to="/movie">
                <div className="w-72 h-96 bg-yellow-200 mx-5 rounded-xl hover:bg-yellow-300 ease-in-out duration-300 cursor-pointer"></div>
            </Link>
            <Link to="/movie">
                <div className="w-72 h-96 bg-green-200 mx-5 rounded-xl hover:bg-green-300 ease-in-out duration-300 cursor-pointer"></div>
            </Link>
            <Link to="/movie">
                <div className="w-72 h-96 bg-blue-200 mx-5 rounded-xl hover:bg-blue-300 ease-in-out duration-300 cursor-pointer"></div>
            </Link>
            <Link to="/movie">
                <div className="w-72 h-96 bg-purple-200 mx-5 rounded-xl hover:bg-purple-300 ease-in-out duration-300 cursor-pointer"></div>
            </Link>
            <Link to="/movie">
                <div className="w-72 h-96 bg-pink-200 mx-5 rounded-xl hover:bg-pink-300 ease-in-out duration-300 cursor-pointer"></div>
            </Link>
        </div>
    );

}

export default FilmForm3;