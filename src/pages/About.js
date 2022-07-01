import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

function Content () {

    return (
        <div className="scroll-smooth bg-black">
            <Header />
            <div className="w-full bg-black p-10 pt-20 md:p-24 h-screen">
                <h1 className="text-white font-bold text-3xl md:text-5xl mb-14">О нас</h1>
                <h2 className="text-white text-2xl md:text-4xl mb-5">Абдуллаев Егор</h2>
                <h2 className="text-white text-2xl md:text-4xl mb-5">Беспалов Вячеслав</h2>
                <h2 className="text-white text-2xl md:text-4xl mb-5">Лохматов Никита</h2>
                <h2 className="text-white text-2xl md:text-4xl mb-5">Синюков Антон</h2>
                <h2 className="text-white text-2xl md:text-4xl mb-5">Шуленков Илья</h2>
            </div>
            <Footer />
        </div>
    );
}


export default Content;