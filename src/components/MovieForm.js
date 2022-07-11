import React from 'react';

class MovieForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            list: [],
        };
    }


    componentDidMount() {
        let kpid1 = window.location.pathname
        let kpid2 = kpid1.substr(kpid1.indexOf("/") + 1);
        let kinopoiskId = kpid2.substr(kpid2.indexOf("/") + 1);

        let urlFetch = "https://v00jte.deta.dev/get_movie/?id=" + kinopoiskId

        fetch(urlFetch)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        title: result.title,
                        description: result.description,
                        id_kinopoisk: result.id_kinopoisk,
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
        const { error, isLoaded, title, description, id_kinopoisk, cover, premiere_date, country, genres, age, producer } = this.state;
        if (document.location.pathname === `/movie/${id_kinopoisk}`) {
            document.title = '[xd] - ' + title;
        }

        let year;
        let month;
        let day;
        let firstNumberOfDay;
        let secondNumberOfDay;

        if (premiere_date !== undefined) {
            year = premiere_date.slice(0, 4)
            month = premiere_date.slice(5, 7)
            day = premiere_date.slice(8, 10)
            firstNumberOfDay = premiere_date.slice(8, 9)
            secondNumberOfDay =  premiere_date.slice(9, 10)
        }

        let countryNew = '';

        if (country !== undefined) {
            for (let i = 0; i < country.length; i++) {
                countryNew = countryNew + country[i] + ', '
            }
        }

        countryNew = countryNew.substring(0, countryNew.length - 2);

        let genresNew = '';

        if (genres !== undefined) {
            for (let i = 0; i < genres.length; i++) {
                genresNew = genresNew + genres[i] + ', '
            }
        }

        genresNew = genresNew.substring(0, genresNew.length - 2);

        let producerNew = '';

        if (producer !== undefined) {
            for (let i = 0; i < producer.length; i++) {
                producerNew = producerNew + producer[i] + ', '
            }
        }

        producerNew = producerNew.substring(0, producerNew.length - 2);

        let monthNew;
        let dayNew;

        if (month === '01') {
            monthNew = 'января'
        } else if (month === '02') {
            monthNew = 'февраля'
        } else if (month === '03') {
            monthNew = 'марта'
        } else if (month === '04') {
            monthNew = 'апреля'
        } else if (month === '05') {
            monthNew = 'мая'
        } else if (month === '06') {
            monthNew = 'июня'
        } else if (month === '07') {
            monthNew = 'июля'
        } else if (month === '08') {
            monthNew = 'августа'
        } else if (month === '09') {
            monthNew = 'сентября'
        } else if (month === '10') {
            monthNew = 'октября'
        } else if (month === '11') {
            monthNew = 'ноября'
        } else if (month === '12') {
            monthNew = 'декабря'
        }

        if (firstNumberOfDay === '0') {
            dayNew = secondNumberOfDay
        } else {
            dayNew = day
        }

        if (error) {
            return (
                window.location.href = `/error/${error.message}`
            );
        } else if (!isLoaded) {
            return <div className="bg-neutral-900 pt-20 text-white p-5 text-xl md:text-3xl text-center">Загрузка...</div>;
        } else {
            return (
                <div className="flex flex-col items-center lg:items-start lg:flex-row w-full pt-28 lg:pt-20 px-14 pb-5 lg:pb-10 lg:px-32">
                    <img src={cover} className="w-72 bg-blue-200 rounded-xl bg-blue-200 bg-cover bg-center cursor-pointer"
                         style={{
                             width: '18rem',
                             height: '26rem'
                         }} alt={title}>
                    </img>
                    <div className="flex flex-col items-start w-full lg:w-2/5 xl:w-3/4 ml-0 lg:ml-10">
                        <h1 className="text-white font-bold text-2xl lg:text-5xl mt-10 lg:mt-0">{title}</h1>
                        <p className="text-white text-base lg:text-xl mt-5">{description}</p>
                        <div className="flex flex-row mt-5">
                            <div>
                                <table className="border-separate border-spacing-y-3 border border-neutral-900">
                                    <tbody>
                                        <tr>
                                            <td className="border-none">
                                                <p className="text-neutral-400 text-sm lg:text-base">Дата премьеры</p>
                                            </td>
                                            <td className="border-none">
                                                <p className="text-white text-sm lg:text-base ml-5 lg:ml-7">{dayNew + ' ' + monthNew + ' ' + year + ' г.'}</p>
                                            </td>
                                        </tr>
                                        <tr className="pt-10">
                                            <td className="border-none">
                                                <p className="text-neutral-400 text-sm lg:text-base">Страна</p>
                                            </td>
                                            <td className="border-none">
                                                <p className="text-white text-sm lg:text-base ml-5 lg:ml-7">{countryNew}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-none">
                                                <p className="text-neutral-400 text-sm lg:text-base">Жанр</p>
                                            </td>
                                            <td className="border-none">
                                                <p className="text-white text-sm lg:text-base ml-5 lg:ml-7">{genresNew}</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="border-none">
                                                <p className="text-neutral-400 text-sm lg:text-base">Режиссёр</p>
                                            </td>
                                            <td className="border-none">
                                                <p className="text-white text-sm lg:text-base ml-5 lg:ml-7">{producerNew}</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="flex justify-center items-center w-12 lg:w-14 h-7 lg:h-9 border-2 border-neutral-400 mt-5 rounded-lg lg:rounded-xl">
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