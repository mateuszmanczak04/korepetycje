import React from 'react';

import './AboutMe.scss';

import Image from 'images/profile.jpg';
import { BsFillPersonFill } from 'react-icons/bs';

const AboutMe = ({ color }) => {
  return (
    <section className={`aboutMe__container ${color}`}>
      <img src={Image} alt='ja' className='aboutMe__image' />
      <h1>
        <BsFillPersonFill />
        Coś o mnie
      </h1>
      <p>
        Mam na imię Mateusz. Mieszkam w Koninie, a dokładnie na Chorzniu. Jestem
        uczniem 3 klasy o profilu z rozszerzoną matematyką, fizyką i angielskim.
        Ta pierwsza zdecydowanie jest moją mocną stroną, więc pomyślałem
        “Dlaczego by tego nie wykorzystać i pomagając innym zrozumieć
        trudniejsze partie materiału, a przy okazji zarobić parę groszy”.
      </p>
    </section>
  );
};

export default AboutMe;
