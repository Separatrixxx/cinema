import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import MovieForm from "../components/MovieForm";

function Movie () {
    let kpid1 = window.location.pathname
    let kpid2 = kpid1.substr(kpid1.indexOf("/") + 1);
    let kinopoiskId = kpid2.substr(kpid2.indexOf("/") + 1);

    return (
            <div className="scroll-smooth bg-neutral-900">
                <Header />
                <MovieForm />
                <div id="kinoplayertop" data-player="bazon" data-kinopoisk={kinopoiskId}></div>
                <Footer />
            </div>
        );
}


export default Movie;
