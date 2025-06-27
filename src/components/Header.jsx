import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.jpeg';
import House from '../img/house.png';
import Galery from '../img/galeria.png';
import Phone from '../img/llamar.png';
import Store from '../img/store.png';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" sticky top-0 z-50 bg-neutral-100 text-black w-full shadow">
    <div className="max-w-9xl mx-auto px-4 h-full flex items-center justify-between relative">
      {/* LOGO a la izquierda */}
      <div className="flex items-center gap-4 h-full">
        <Link to="/proto">
          <img src={logo} alt="Logo Backnda" className="h-[100px] max-h-[100px] object-contain" />
        </Link>
      </div>

      {/* Íconos centrados */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-16">
        <Link to="/proto" className="hover:underline">
          <img src={House} alt="House" className="h-10 object-contain" />
        </Link>
        <Link to="/proto" className="hover:underline">
          <img src={Galery} alt="Galery" className="h-10 object-contain" />
        </Link>
        <Link to="/proto" className="hover:underline">
          <img src={Phone} alt="Phone" className="h-10 object-contain" />
        </Link>
      </div>

      {/* Ícono de tienda a la derecha */}
      <div className="hidden md:flex items-center">
        <Link to="/proto" className="hover:underline">
          <img src={Store} alt="Store" className="h-10 object-contain" />
        </Link>
      </div>

      {/* Botón para celular */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>
    </div>



      {/* Menú móvil DESPLEGABLE con transición */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-60 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-row items-center justify-between px-6 pb-4 gap-4 text-center">
          <div className="flex gap-4">
            <Link to="/proto" className="hover:underline">
              <img src={House} alt="House" className="h-10 object-contain" />
            </Link>
            <Link to="/proto" className="hover:underline">
              <img src={Galery} alt="Galery" className="h-10 object-contain" />
            </Link>
            <Link to="/proto" className="hover:underline">
              <img src={Phone} alt="Phone" className="h-10 object-contain" />
            </Link>
          </div>
          <Link to="/proto" className="hover:underline">
            <img src={Store} alt="Store" className="h-10 object-contain" />
          </Link>
        </nav>
      </div>

    </header>
  );
}

export default Header;
