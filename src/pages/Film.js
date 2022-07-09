import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

class Film extends React.Component {
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
        const { error, isLoaded, list } = this.state;
        if (error) {
            return <div className="bg-white">Ошибка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className="bg-white">Загрузка...</div>;
        } else {
            return (
                <div className="scroll-smooth bg-neutral-900">
                    <Header />
                    <div className="flex flex-col md:flex-row w-full py-28 md:py-20 px-14 md:px-32">
                        <div className="w-full md:w-1/4 h-96 bg-blue-200 rounded-xl">

                        </div>
                        <div className="w-full md:w-3/4 ml-0 md:ml-10">
                            <h1 className="text-white font-bold text-2xl md:text-5xl mt-10 md:mt-0">Бесславные ублюдки</h1>
                            <p className="text-white text-base md:text-xl mt-5">Провокационная комедия Квентина Тарантино о специальном отряде солдат, охотящихся на нацистов во время Второй мировой войны. Поклонники фирменного стиля режиссера будут рады: в фильме есть и юмор, и пародия на киножанры, и интеллектуальные задачки для любителей кино. Актерский состав на высоте. Например, игра Кристофа Вальца в этом фильме принесла ему первый «Оскар» за мужскую роль.</p>
                            <div className="flex flex-row mt-10">
                                <div>
                                    <p className="text-neutral-400 text-sm md:text-base">Дата премьеры</p>
                                    <p className="text-neutral-400 text-sm md:text-base mt-3">Страна</p>
                                    <p className="text-neutral-400 text-sm md:text-base mt-3">Жанр</p>
                                    <p className="text-neutral-400 text-sm md:text-base mt-3">Режиссёр</p>
                                    <div className="flex justify-center items-center w-12 md:w-14 h-7 md:h-9 border-2 border-neutral-400 mt-5 rounded-lg md:rounded-xl">
                                        <p className="text-neutral-400 font-bold">16+</p>
                                    </div>
                                </div>
                                <div className="ml-10">
                                    <p className="text-white text-sm md:text-base">20 августа 2009 г. </p>
                                    <p className="text-white text-sm md:text-base mt-3">США, Германия</p>
                                    <p className="text-white text-sm md:text-base mt-3">боевик, драма</p>
                                    <p className="text-white text-sm md:text-base mt-3">Квентин Тарантино</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="kinoplayertop" data-player="bazon" data-kinopoisk="9691"></div>
                    <Footer />
                </div>
            );
        }
    }
}

export default Film;