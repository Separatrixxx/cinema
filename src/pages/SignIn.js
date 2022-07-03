import React from 'react';
import {Link} from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs";

function SignIn () {

    return (
        <div className="scroll-smooth bg-black">
            <div className="flex justify-start items-center absolute w-full h-12 top-0 bg-transparent px-3 md:px-7">
                <Link to="/">
                    <h1 className="text-3xl text-white rounded-full hover:text-blue-500 transition-colors duration-300">
                        <BsArrowLeft/>
                    </h1>
                </Link>
            </div>
            <div className="flex flex-col items-center w-full h-screen">
                <h1 className="text-white font-bold text-2xl md:text-5xl mt-32">С возвращением!</h1>
                <input
                    className="block shadow-inner md:w-96 h-10 w-64 mt-14 rounded-full pl-8 p-3 focus:outline-none focus:bg-blue-300 focus:text-white ease-in-out duration-300"
                    placeholder="E-mail" type="text"/>
                <input
                    className="block shadow-inner md:w-96 h-10 w-64 mt-7 rounded-full pl-8 p-3 focus:outline-none focus:bg-blue-300 focus:text-white ease-in-out duration-300"
                    placeholder="Пароль" type="text"/>
                <Link to="/forgot"><p className="mt-5 text-white hover:text-blue-500 font-bold text-sm ease-in-out duration-300">Забыли пароль?</p></Link>
                <button className="md:w-48 h-10 w-32 rounded-full mt-14 text-sm bg-white text-blue-500 font-bold hover:bg-blue-500 hover:text-white ease-in-out duration-300">
                    Войти
                </button>
                <p className="mt-32 md:mt-48 text-white text-md">Нет аккаунта? <Link to="/registration"><span className="text-white hover:text-blue-500 font-bold text-md ease-in-out duration-300">Зарегистрироваться</span></Link></p>
            </div>
        </div>
    );
}


export default SignIn;
