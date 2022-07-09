import React from 'react';

class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            list: []
        };
    }


    componentDidMount() {
        let kpid1 = window.location.pathname
        let kpid2 = kpid1.substr(kpid1.indexOf("/") + 1);
        let kinopoiskId = kpid2.substr(kpid2.indexOf("/") + 1);

        let urlFetch = "http://127.0.0.1:8000/get_movie/?id=" + kinopoiskId

        fetch(urlFetch)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        title: result.title,
                        description: result.description,
                        cover: result.cover,
                        premiere_date: result.premiere_date,
                        country: result.country,
                        genres: result.genres,
                        age: result.age,
                        producer: result.producer
                    });
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, title, description, cover, premiere_date, country, genres, age, producer } = this.state;
        if (error) {
            return (
                <div className="bg-neutral-900 pt-20 p-5">
                    <h1 className="text-white font-bold text-xl md:text-3xl">Ошибка: {error.message}</h1>
                    <p className="text-white text-base md:text-xl mt-3">Извините, произошла ошибка при загрузке данных фильма</p>
                </div>
            );
        } else if (!isLoaded) {
            return <div className="bg-neutral-900 pt-20 text-white p-5 text-xl md:text-3xl">Загрузка...</div>;
        } else {
            return (
                <div className="flex flex-col md:flex-row w-full py-28 md:py-20 px-14 md:px-32">
                    <div className="w-full md:w-1/4 h-96 bg-blue-200 rounded-xl bg-cover bg-center"
                         style={{
                             backgroundImage: `url(${cover})`
                         }}>
                    </div>
                    <div className="w-full md:w-3/4 ml-0 md:ml-10">
                        <h1 className="text-white font-bold text-2xl md:text-5xl mt-10 md:mt-0">{title}</h1>
                        <p className="text-white text-base md:text-xl mt-5">{description}</p>
                        <div className="flex flex-row mt-10">
                            <div>
                                <div className="flex flex-row justify-start">
                                    <p className="text-neutral-400 text-sm md:text-base">Дата премьеры</p>
                                    <p className="text-white text-sm md:text-base ml-10">{premiere_date}</p>
                                </div>
                                <div className="flex flex-row mt-3 justify-start">
                                    <p className="text-neutral-400 text-sm md:text-base">Страна</p>
                                    <p className="text-white text-sm md:text-base ml-10">{country}</p>
                                </div>
                                <div className="flex flex-row mt-3 justify-start">
                                    <p className="text-neutral-400 text-sm md:text-base">Жанр</p>
                                    <p className="text-white text-sm md:text-base ml-10">{genres}</p>
                                </div>
                                <div className="flex flex-row mt-3 justify-start">
                                    <p className="text-neutral-400 text-sm md:text-base">Режиссёр</p>
                                    <p className="text-white text-sm md:text-base ml-10">{producer}</p>
                                </div>
                                <div className="flex justify-center items-center w-12 md:w-14 h-7 md:h-9 border-2 border-neutral-400 mt-5 rounded-lg md:rounded-xl">
                                    <p className="text-neutral-400 font-bold">{age}+</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default MovieForm;