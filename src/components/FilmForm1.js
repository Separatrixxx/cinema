import React from "react";
import {Link} from "react-router-dom";


function FilmForm1() {
    return(
        <Link to="/movie">
            <div id="first_div" className="flex justify-start items-end w-full h-96 md:h-screen bg-blue-200 cursor-pointer
        bg-cover bg-center bg-no-repeat select-none">
                <button className="bg-blue-500 w-40 md:w-64 h-10 md:h-12 m-10 text-white rounded-lg md:rounded-xl
            hover:scale-105 hover:bg-blue-600 ease-in-out duration-300">
                    Смотреть
                </button>
            </div>
        </Link>
    );

}

export default FilmForm1;