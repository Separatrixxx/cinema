import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import FilmForm1 from '../components/FilmForm1'
import FilmForm2 from '../components/FilmForm2'
import FilmForm3 from '../components/FilmForm3'
import FilmForm4 from '../components/FilmForm4'


function Home () {

    return (
        <div className="scroll-smooth bg-neutral-900">
            <Header />
            <FilmForm1 />
            <h1 className="text-white text-xl md:text-3xl font-bold pt-5 md:pt-10 pl-14">Фильмы для вас</h1>
            <FilmForm2 />
            <h1 className="text-white text-xl md:text-3xl font-bold pt-5 md:pt-10 pl-14">Новинки</h1>
            <FilmForm3 />
            <h1 className="text-white text-xl md:text-3xl font-bold pt-5 md:pt-10 pl-14">Лучшие фильмы</h1>
            <FilmForm4 />
            <Footer />
        </div>
    );
}


export default Home;
