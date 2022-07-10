import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import FilmForm2 from '../components/FilmForm2'
import FilmForm3 from '../components/FilmForm3'


function Home () {
    return (
        <div className="scroll-smooth bg-neutral-900">
            <Header />
            <h1 className="text-white font-bold text-2xl md:text-4xl pt-20 pl-10 md:pl-44">Жанры</h1>
            <FilmForm3 />
            <h1 className="text-white font-bold text-2xl md:text-4xl pt-12 pl-10 md:pl-44">Все фильмы и сериалы</h1>
            <FilmForm2 />
            <Footer />
        </div>
    );
}


export default Home;
