import logo from "../../assets/logo/logo_lowpoly.svg";
import React from "react";

export const Navbar: React.FC = () => {
    return <>
        <header>
            <nav className="container flex">
                <div className="flex mx-auto items-center bg-purple-50 px-8 py-2 mt-4 rounded-full border-solid border-4 border-purple-300 border-opacity-25">
                    <img src={logo} className="img-fluid h-8 pr-4 mb-2 mt-2" alt="Dirr"/>
                    <h1 className="font-PatrickHand text-3xl text-purple-500 align-bottom">Dirr</h1>
                </div>
            </nav>
        </header>
    </>
}