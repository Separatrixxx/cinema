import React from "react";


class FilmForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            list: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:8000/get_movie_many/?count=1000000")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        list: result.list
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
            return <div className="bg-white">Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="bg-white">Загрузка...</div>;
        } else {
            return (
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-7 md:gap-12 pt-20">
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

export default FilmForm2;