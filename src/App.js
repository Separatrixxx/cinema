import React from 'react';
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Movie from './pages/Movie'

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
                    <Route path='/forgot' element={<ForgotPassword/>} />
                    <Route path='/movie' element={<Movie/>} />

                    <Route path="/movie">
                        <Route index element={<NotFound />} />
                        <Route path=":id" element={<Movie />} />
                    </Route>
                </Routes>
            </Router>
        </div>

    );
}

export default App;
