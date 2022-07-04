import React from 'react';
import {Link} from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs";

function SignIn () {

    return (
        <div className="scroll-smooth bg-neutral-900">
            <div className="flex justify-start items-center absolute w-full h-12 top-0 bg-transparent px-3 md:px-7">
                <Link to="/">
                    <h1 className="text-3xl text-white rounded-full hover:text-blue-500 transition-colors duration-300">
                        <BsArrowLeft/>
                    </h1>
                </Link>
            </div>
            <div className="flex flex-col items-center w-full h-screen">
                <h1 className="text-white font-bold text-2xl md:text-5xl mt-32">Добро пожаловать на [xd]!</h1>
                <input
                    className="block shadow-inner md:w-96 h-10 w-64 mt-14 rounded-full pl-8 p-3 focus:outline-none focus:bg-blue-300 focus:text-white ease-in-out duration-300"
                    placeholder="Имя" type="text"/>
                <input
                    className="block shadow-inner md:w-96 h-10 w-64 mt-7 rounded-full pl-8 p-3 focus:outline-none focus:bg-blue-300 focus:text-white ease-in-out duration-300"
                    placeholder="E-mail" type="text"/>
                <input
                    className="block shadow-inner md:w-96 h-10 w-64 mt-7 rounded-full pl-8 p-3 focus:outline-none focus:bg-blue-300 focus:text-white ease-in-out duration-300"
                    placeholder="Пароль" type="text"/>
                <input
                    className="block shadow-inner md:w-96 h-10 w-64 mt-7 rounded-full pl-8 p-3 focus:outline-none focus:bg-blue-300 focus:text-white ease-in-out duration-300"
                    placeholder="Повторите пароль" type="text"/>
                <button className="w-48 h-10 rounded-full mt-14 text-sm bg-white text-blue-500 font-bold hover:bg-blue-500 hover:text-white ease-in-out duration-300">
                    Зарегистрироваться
                </button>
                <p className="mt-24 text-white text-md">Уже есть аккаунт? <Link to="/login"><span className="text-white hover:text-blue-500 font-bold text-md ease-in-out duration-300">Войти</span></Link></p>
            </div>
        </div>
    );
}


export default SignIn;
