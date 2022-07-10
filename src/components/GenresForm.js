import React from "react";


class GenresForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            list: []
        };
    }

    componentDidMount() {
        let gnr1 = window.location.pathname
        let gnr2 = gnr1.substr(gnr1.indexOf("/") + 1);
        let genreEng = gnr2.substr(gnr2.indexOf("/") + 1);
        let genreRus;

        if (genreEng === 'comedy') {
            genreRus = 'комедия'
        } else if (genreEng === 'cartoons') {
            genreRus = 'мультфильм'
        } else if (genreEng === 'horrors') {
            genreRus = 'ужасы'
        } else if (genreEng === 'sci-fi') {
            genreRus = 'фантастика'
        } else if (genreEng === 'thrillers') {
            genreRus = 'триллер'
        } else if (genreEng === 'actions') {
            genreRus = 'боевик'
        } else if (genreEng === 'romance') {
            genreRus = 'мелодрама'
        } else if (genreEng === 'detectives') {
            genreRus = 'детектив'
        } else if (genreEng === 'adventures') {
            genreRus = 'приключения'
        } else if (genreEng === 'fantasy') {
            genreRus = 'фэнтези'
        } else if (genreEng === 'war') {
            genreRus = 'военный'
        } else if (genreEng === 'family') {
            genreRus = 'семейный'
        } else if (genreEng === 'anime') {
            genreRus = 'аниме'
        } else if (genreEng === 'historical') {
            genreRus = 'история'
        } else if (genreEng === 'drama') {
            genreRus = 'драма'
        } else if (genreEng === 'children') {
            genreRus = 'детский'
        } else if (genreEng === 'crime') {
            genreRus = 'криминал'
        } else if (genreEng === 'biography') {
            genreRus = 'биография'
        } else if (genreEng === 'westerns') {
            genreRus = 'вестерн'
        } else if (genreEng === 'noir') {
            genreRus = 'фильм-нуар'
        } else if (genreEng === 'musicals') {
            genreRus = 'мюзикл'
        }

        let urlFetch = "http://127.0.0.1:8000/get_movie_by_genres/?genres=" + genreRus

        console.log(genreRus)

        fetch(urlFetch)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        list: result.list.reverse()
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, list } = this.state;
        if (error) {
            return (
                <div className="flex flex-col justify-center items-center h-screen bg-neutral-900 pt-20 p-5">
                    <h1 className="text-white font-bold text-3xl md:text-5xl text-center">Ошибка: {error.message}</h1>
                    <p className="text-white text-xl md:text-3xl text-center mt-5">Извините, произошла ошибка при загрузке фильмов</p>
                </div>
            );
        } else if (!isLoaded) {
            return (
                <div className="flex flex-col justify-center items-center h-screen bg-neutral-900 pt-20 p-5">
                    <h1 className="text-white font-bold text-3xl md:text-5xl text-center">Загрузка...</h1>
                </div>
            );
        } else {
            if (list.length === 0) {
                return (
                    <div className="flex justify-center items-center bg-neutral-900 h-screen">
                        <h className="text-white font-bold text-3xl md:text-5xl text-center">Не найдено фильмов в выбранной категории</h>
                    </div>
                );
            } else {
                return (
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 md:gap-12 pt-5">
                            {list.map(item => (
                                <a key={item.id_kinopoisk} href={`/movie/${item.id_kinopoisk}`}>
                                    <div className="w-32 md:w-64 h-48 md:h-96">
                                        <div className="flex items-end w-32 md:w-64 h-48 md:h-96 bg-cover bg-center rounded-xl hover:scale-105 ease-in-out duration-300 cursor-pointer"
                                             style={{
                                                 backgroundImage: `url(${item.cover})`
                                             }}>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                );
            }
        }
    }
}

export default GenresForm;