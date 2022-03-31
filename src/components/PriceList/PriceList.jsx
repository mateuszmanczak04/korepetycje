import React from 'react';

import { FaMoneyCheckAlt } from 'react-icons/fa';

const PriceList = ({ color }) => {
  return (
    <section className={` ${color}`}>
      <FaMoneyCheckAlt className='icon' />
      <h1>Cennik</h1>
      <p>
        Swoją pracę wykonuję na dwa sposoby - przyjeżdzając do ucznia oraz
        zdalnie. Ceny mają się następująco:
        <br />
        <br />
        - Zdalnie 40zł/60min.
        <br />
        <br />- Stacjonarnie w zależności od odległości dojazdu. Ceny zaczynają
        się od 50zł/60min.
        <br />
        <br />
        Jeśli, po upływie czasu, uczeń uzna, że potrzebuje jeszcze trochę
        powtórzyć, a ja mam akurat czas, rozliczamy się proporcjonalnie w
        zależności od przedłużonego czasu.
      </p>
    </section>
  );
};

export default PriceList;
