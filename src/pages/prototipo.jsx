import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bar from '../components/Bar';

function Prototipo(){
    return(
        <div className="min-h-screeen flex flex-col items-center justify-center" >
            <Header/>
            <main className="flex-grow flex justify-center items-center" >
                <Bar/>
            </main>
            <Footer/>
        </div>
    );
}

export default Prototipo;