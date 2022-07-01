import React from "react";
import {FaTelegramPlane, FaDiscord, FaYoutube, FaTwitter, FaVk} from "react-icons/fa";
import {Link} from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";


function Footer() {
    return(
        <div className="flex flex-col items-center w-full bg-black mt-10">
            <div className="flex flex-col md:flex-row md:flex-row justify-between items-center w-full md:w-2/3 pb-0 md:pb-10 pt-10 px-10 border-t">
                <div className="flex justify-center w-1/4">
                     <ScrollIntoView selector="#first_div" className="cursor-pointer"><p className="text-white text-sm font-medium ml-5 hidden md:block">© 2022
                         <span className="font-semibold"> [xd]</span></p>
                    </ScrollIntoView>
                </div>
                <div className="flex justify-center w-1/2">
                    <a id="vk" className="text-2xl text-white mx-5 transition-colors duration-300" href="/">
                        <FaVk/>
                    </a>
                    <a id="telegram" className="text-2xl text-white mx-5 transition-colors duration-300" href="/">
                        <FaTelegramPlane/>
                    </a>
                    <a id="discord" className="text-2xl text-white mx-5 transition-colors duration-300" href="/">
                        <FaDiscord/>
                    </a>
                    <a id="youtube" className="text-2xl text-white mx-5 transition-colors duration-300" href="/">
                        <FaYoutube/>
                    </a>
                    <a id="twitter" className="text-2xl text-white mx-5 transition-colors duration-300" href="/">
                        <FaTwitter/>
                    </a>
                </div>

                <div className="flex justify-center w-1/4">
                    <ScrollIntoView selector="#first_div" className="cursor-pointer"><p className="text-white text-sm font-medium mt-12 block md:hidden">© 2022
                        <span className="font-semibold">[xd]</span></p>
                    </ScrollIntoView>
                </div>
            </div>
            <p className="text-white text-xs m-5">by <span className="font-bold">
                <Link to="/about" className="font-bold cursor-pointer">gachigaylords-xd</Link>
            </span></p>

        </div>
    );

}

export default Footer;