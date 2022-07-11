import React from "react";


class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            list: []
        };
    }

    componentDidMount() {
        let search1 = window.location.pathname
        let search2 = search1.substr(search1.indexOf("/") + 1);
        let search = search2.substr(search2.indexOf("/") + 1);

        let urlFetch = "https://ib7l04.deta.dev/get_movie_by_title/?title=" + search

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

        document.title = '[xd] - Поиск';

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
                        <h1 className="text-white font-bold text-3xl md:text-5xl text-center">Не найдено фильмов с таким названием</h1>
                    </div>
                );
            } else {
                return (
                    <div className="flex justify-center pt-20">
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

export default SearchForm;