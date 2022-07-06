import React, {Component} from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

class Movie extends Component {

    state = {
        torrentInfoHash: "",
        torrentMagnetURI: "",
        torrentName: "",
        torrentProgress: "",
        torrentFiles: []
    }

    componentDidMount() {
        // Sintel, a free, Creative Commons movie
        const torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent';

        const WebTorrent = require('webtorrent');
        const client = new WebTorrent();

        client.on('error', err => {
            console.log('[+] Webtorrent error: ' + err.message);
        });

        client.add(torrentId, (torrent) => {
            const interval = setInterval(() => {
                // console.log('[+] Progress: ' + (torrent.progress * 100).toFixed(1) + '%')
                this.setState({torrentProgress: (torrent.progress * 100).toFixed(1) + '%'});
            }, 5000);
            torrent.on('done', () => {
                console.log('Progress: 100%');
                clearInterval(interval);
            })

            this.setState({
                torrentInfoHash: torrent.infoHash,
                torrentMagnetURI: torrent.magnetURI,
                torrentName: torrent.name,
                torrentFiles: torrent.files
            });

            // TODO Figure out a better way to render these files
            this.state.torrentFiles.map((file, i) => {
                file.appendTo('body');
            })

        });
    }

    render() {
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
                <div>
                    <h1>{this.state.torrentName}</h1>
                    <p><b>Torrent Info Hash: </b>{this.state.torrentInfoHash}</p>
                    <p><b>Torrent Progress: </b>{this.state.torrentProgress}</p>
                </div>
                <Footer />
            </div>
        );
    }
}


export default Movie;
