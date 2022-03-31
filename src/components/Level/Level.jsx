import React from 'react';

import { MdStairs } from 'react-icons/md';

const Level = ({ color }) => {
  return (
    <section className={` ${color}`}>
      <MdStairs className='icon' />
      <h1>Poziom</h1>
      <p>
        Jak już wspomniałem, jestem uczniem 3 klasy, dokładniej liceum po szkole
        podstawowej. Udzielam korepetycji całej szkole podstawowej oraz 1 i 2
        klasie liceum/technikum (na podstawie i rozszerzeniu).
      </p>
    </section>
  );
};

export default Level;
