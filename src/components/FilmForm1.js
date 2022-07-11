import React from "react";
import {VscDebugStart} from "react-icons/vsc";


function FilmForm1() {
    return(
        <div id="first_div" className="bg-neutral-900 px-10 md:px-44 pt-20">
            <div id="cover_div" className="flex justify-start items-end w-full h-48 lg:h-72 xl:h-96 bg-blue-200 rounded-xl bg-cover bg-center bg-no-repeat select-none">
                <div className="flex flex-col justify-center items-center w-36 lg:w-64 xl:w-72 h-16 lg:h-28 xl:h-36 bg-blue-900/80 backdrop-blur-sm rounded-tr-xl rounded-bl-xl">
                    <h1 className="text-white font-bold text-sm lg:text-2xl xl:text-3xl mt-1">Во все тяжкие</h1>
                    <button onClick={scrollTop} className="flex bg-blue-500 w-24 lg:w-28 xl:w-32 h-6 md:h-10 mt-1 mb-2 lg:mt-4 xl:mt-5 text-white rounded-md lg:rounded-lg xl:rounded-xl
                hover:scale-105 hover:bg-blue-600 hover:scale-105 ease-in-out duration-300 justify-center items-center text-xs lg:text-sm xl:text-base">
                        <span className="mr-1 text-sm lg:text-base xl:text-lg"><VscDebugStart /></span>Смотреть
                    </button>
                </div>
            </div>
        </div>
    );
}

function scrollTop() {
    window.scrollTo(0, 0)
    window.location.href = '/movie/404900'
}

export default FilmForm1;