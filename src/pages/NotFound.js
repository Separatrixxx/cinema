import React from 'react';
import {Emoji, EmojiProvider} from "react-apple-emojis";
import emojiData from 'react-apple-emojis/src/data.json';


function NotFound () {

    return (
        <div className="scroll-smooth bg-neutral-900 w-full h-screen flex flex-col justify-center items-center p-5">
            <a href="/">
                <EmojiProvider data={emojiData} ><Emoji name="pensive-face" width={120} /></EmojiProvider>
            </a>
            <a href="/" className="mt-10 md:mt-16 text-xl md:text-5xl text-white text-center hover:text-gray-300 transition-colors duration-500 font-black">Упс... Похоже, такой страницы не существует :(</a>
        </div>
    );
}

export default NotFound;