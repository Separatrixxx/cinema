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