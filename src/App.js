import React from 'react';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Movie from './pages/Movie'
import Error from './pages/Error'
import Genres from './pages/Genres'
import Search from './pages/Search'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="scroll-smooth bg-black">
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='*' element={<NotFound/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/login' element={<SignIn/>} />
                    <Route path='/registration' element={<SignUp/>} />
                    <Route path='/forgot_password' element={<ForgotPassword/>} />
                    <Route path='/movie' element={<Movie/>} />
                    <Route path='/error' element={<Error/>} >
                        <Route index element={<Error />} />
                        <Route path=":id" element={<Error />} />
                    </Route>
                    <Route path="/movie">
                        <Route index element={<NotFound />} />
                        <Route path=":id" element={<Movie />} />
                    </Route>
                    <Route path='/comedy' element={<Genres/>} />
                    <Route path='/cartoons' element={<Genres/>} />
                    <Route path='/horrors' element={<Genres/>} />
                    <Route path='/sci-fi' element={<Genres/>} />
                    <Route path='/thrillers' element={<Genres/>} />
                    <Route path='/actions' element={<Genres/>} />
                    <Route path='/romance' element={<Genres/>} />
                    <Route path='/detectives' element={<Genres/>} />
                    <Route path='/adventures' element={<Genres/>} />
                    <Route path='/fantasy' element={<Genres/>} />
                    <Route path='/war' element={<Genres/>} />
                    <Route path='/family' element={<Genres/>} />
                    <Route path='/anime' element={<Genres/>} />
                    <Route path='/historical' element={<Genres/>} />
                    <Route path='/drama' element={<Genres/>} />
                    <Route path='/children' element={<Genres/>} />
                    <Route path='/crime' element={<Genres/>} />
                    <Route path='/biography' element={<Genres/>} />
                    <Route path='/westerns' element={<Genres/>} />
                    <Route path='/noir' element={<Genres/>} />
                    <Route path='/musicals' element={<Genres/>} />
                    <Route path='/search'>
                        <Route index element={<NotFound />} />
                        <Route path=":id" element={<Search />} />
                    </Route>
                </Routes>
            </Router>
        </div>

    );
}

export default App;
