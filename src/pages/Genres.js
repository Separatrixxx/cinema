import React from 'react';
import HeaderFilm from "../components/HeaderFilm";
import Footer from '../components/Footer'
import GenresForm from '../components/GenresForm'


function Genres () {
    let gnr1 = window.location.pathname
    let gnr2 = gnr1.substr(gnr1.indexOf("/") + 1);
    let genreEng = gnr2.substr(gnr2.indexOf("/") + 1);
    let genreRusMn;

    if (genreEng === 'comedy') {
        genreRusMn = 'Комедии'
    } else if (genreEng === 'cartoons') {
        genreRusMn = 'Мультфильмы'
    } else if (genreEng === 'horrors') {
        genreRusMn = 'Ужасы'
    } else if (genreEng === 'sci-fi') {
        genreRusMn = 'Фантастика'
    } else if (genreEng === 'thrillers') {
        genreRusMn = 'Триллеры'
    } else if (genreEng === 'actions') {
        genreRusMn = 'Боевики'
    } else if (genreEng === 'romance') {
        genreRusMn = 'Мелодрамы'
    } else if (genreEng === 'detectives') {
        genreRusMn = 'Детективы'
    } else if (genreEng === 'adventures') {
        genreRusMn = 'Приключения'
    } else if (genreEng === 'fantasy') {
        genreRusMn = 'Фэнтези'
    } else if (genreEng === 'war') {
        genreRusMn = 'Военные'
    } else if (genreEng === 'family') {
        genreRusMn = 'Семейные'
    } else if (genreEng === 'anime') {
        genreRusMn = 'Аниме'
    } else if (genreEng === 'historical') {
        genreRusMn = 'Исторические'
    } else if (genreEng === 'drama') {
        genreRusMn = 'Драмы'
    } else if (genreEng === 'children') {
        genreRusMn = 'Детские'
    } else if (genreEng === 'crime') {
        genreRusMn = 'Криминал'
    } else if (genreEng === 'biography') {
        genreRusMn = 'Биографии'
    } else if (genreEng === 'westerns') {
        genreRusMn = 'Вестерны'
    } else if (genreEng === 'noir') {
        genreRusMn = 'Фильмы-нуар'
    } else if (genreEng === 'musicals') {
        genreRusMn = 'Мюзиклы'
    } else if (genreEng === 'music') {
        genreRusMn = 'Музыка'
    } else if (genreEng === 'sport') {
        genreRusMn = 'Спортивные'
    }

    document.title = '[xd] - ' + genreRusMn;

    return (
        <div className="scroll-smooth bg-neutral-900">
            <HeaderFilm />
            <h1 className="text-white font-bold text-2xl md:text-4xl pt-20 pl-10 md:pl-44">{genreRusMn}</h1>
            <GenresForm />
            <Footer />
        </div>
    );
}


export default Genres;