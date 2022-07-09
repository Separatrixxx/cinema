import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import FilmForm2 from '../components/FilmForm2'


function Home () {
    return (
        <div className="scroll-smooth bg-neutral-900">
            <Header />
            <FilmForm2 />
            <Footer />
        </div>
    );
}


export default Home;
