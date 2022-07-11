import React from 'react';
import HeaderFilm from '../components/HeaderFilm'
import Footer from '../components/Footer'

function Content () {

    return (
        <div className="scroll-smooth bg-neutral-900">
            <HeaderFilm />
            <div className="flex flex-col w-full items-start p-10 pt-20 md:p-24 h-screen select-none lg:select-auto">
                <h1 className="text-white font-bold text-3xl md:text-5xl mb-9">О нас</h1>
                <p className="text-white text-2xl md:text-4xl mb-9 text-start">Команда <span className="text-blue-500">gachigaylords-xd </span>
                на треке Online-cinema, в состав которой входят:</p>
                <a href="https://vk.com/speeky" target="_blank" rel="noreferrer" className="text-white text-2xl md:text-3xl hover:text-blue-500 mb-5 ease-in-out duration-300 cursor-pointer">Абдуллаев Егор</a>
                <a href="https://vk.com/slavabesfamilny" target="_blank" rel="noreferrer" className="text-white text-2xl md:text-3xl hover:text-blue-500 mb-5 ease-in-out duration-300 cursor-pointer">Беспалов Вячеслав</a>
                <a href="https://vk.com/separatrix" target="_blank" rel="noreferrer" className="text-white text-2xl md:text-3xl hover:text-blue-500 mb-5 ease-in-out duration-300 cursor-pointer">Лохматов Никита</a>
                <a href="https://vk.com/antonckya" target="_blank" rel="noreferrer" className="text-white text-2xl md:text-3xl hover:text-blue-500 mb-5 ease-in-out duration-300 cursor-pointer">Синюков Антон</a>
                <a href="https://vk.com/depressedk1d0" target="_blank" rel="noreferrer" className="text-white text-2xl md:text-3xl hover:text-blue-500 mb-9 ease-in-out duration-300 cursor-pointer">Шуленков Илья</a>
                <p className="text-white text-2xl md:text-4xl mb-7 text-start">Разработала <span className="text-blue-500">лучший </span>онлайн-кинотеатр</p>
                <a href="/" className="text-blue-500 font-bold text-7xl md:text-9xl">[xd]</a>
            </div>
            <Footer />
        </div>
    );
}


export default Content;
