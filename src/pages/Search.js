import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer'
import SearchForm from '../components/SearchForm'


function Search () {
    return (
        <div className="scroll-smooth bg-neutral-900 h-screen">
            <div className="flex flex-col items-center w-full">
                <Header />
                <SearchForm />
                <Footer />
            </div>
        </div>
    );
}






export default Search;