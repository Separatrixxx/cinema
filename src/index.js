import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('#nav_div');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        header.classList.remove('hide');
    }

    lastScroll = scrollPosition();
})

if (document.getElementById("horizontal-scroller-1") !== null) {
    document.getElementById("horizontal-scroller-1")
        .addEventListener('wheel', function(event) {
            let modifier;
            // иные режимы возможны в Firefox
            if (event.deltaMode === event.DOM_DELTA_PIXEL) {
                modifier = 1;
            } else if (event.deltaMode === event.DOM_DELTA_LINE) {
                modifier = parseInt(getComputedStyle(this).lineHeight);
            } else if (event.deltaMode === event.DOM_DELTA_PAGE) {
                modifier = this.clientHeight;
            }
            if (event.deltaY !== 0) {
                // замена вертикальной прокрутки горизонтальной
                this.scrollLeft += modifier * event.deltaY;
                event.preventDefault();
            }
        });
}

if (document.getElementById("horizontal-scroller-2") !== null) {
    document.getElementById("horizontal-scroller-2")
        .addEventListener('wheel', function(event) {
            let modifier;
            // иные режимы возможны в Firefox
            if (event.deltaMode === event.DOM_DELTA_PIXEL) {
                modifier = 1;
            } else if (event.deltaMode === event.DOM_DELTA_LINE) {
                modifier = parseInt(getComputedStyle(this).lineHeight);
            } else if (event.deltaMode === event.DOM_DELTA_PAGE) {
                modifier = this.clientHeight;
            }
            if (event.deltaY !== 0) {
                // замена вертикальной прокрутки горизонтальной
                this.scrollLeft += modifier * event.deltaY;
                event.preventDefault();
            }
        });
}

if (document.getElementById("horizontal-scroller-3") !== null) {
    document.getElementById("horizontal-scroller-3")
        .addEventListener('wheel', function(event) {
            let modifier;
            // иные режимы возможны в Firefox
            if (event.deltaMode === event.DOM_DELTA_PIXEL) {
                modifier = 1;
            } else if (event.deltaMode === event.DOM_DELTA_LINE) {
                modifier = parseInt(getComputedStyle(this).lineHeight);
            } else if (event.deltaMode === event.DOM_DELTA_PAGE) {
                modifier = this.clientHeight;
            }
            if (event.deltaY !== 0) {
                // замена вертикальной прокрутки горизонтальной
                this.scrollLeft += modifier * event.deltaY;
                event.preventDefault();
            }
        });
}