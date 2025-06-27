import React, { useEffect, useState } from "react";
import Carlitos from '../img/carlitos.png';
import Ig from '../img/instagram.png';
import { Link } from "react-router-dom";

function Bar({ progress = 50 }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = () => {
      if (current <= progress) {
        setAnimatedProgress(current);
        current += 1;
        setTimeout(step, 10); 
      }
    };
    step();
  }, [progress]);

  return (
    <div className="w-screen py-6 bg-neutral-100">
      <div className="h-6 bg-neutral-800 rounded-full overflow-hidden mx-4">
        <div
          className="h-6 bg-green-500 rounded-full transition-all duration-300"
          style={{ width: `${animatedProgress}%` }}
        ></div>
      </div>

      <div className="flex justify-between mb-2 px-4 text-sm font-medium text-black">
        <span>0 %</span>
        <span>100 %</span>
      </div>

      {animatedProgress === 50 && (
        <div className="flex flex-col justify-center items-center">
        <img
            src={Carlitos}
            alt="Mitad"
            className="w-128 h-auto mt-8 mb-4 rounded-lg"
        />
        <p className="text-center text-lg font-semibold mb-8">
            Estamos bordando nuestra casita virtual, muy pronto estaremos contigo...
        </p>
        <p className="text-center text-lg font-semibold mb-8">
            Contactanos:
        </p>
        <a href=" https://www.instagram.com/baknda.oax?igsh=MTVzc3h1a3J6dzE3aQ=="
         target="_black" rel="noopener noreferrer" className="flex items-center gap-2">
            <img src={Ig} alt="Ig"/>
        </a>
        </div>
      )}
    </div>
  );
}

export default Bar;
