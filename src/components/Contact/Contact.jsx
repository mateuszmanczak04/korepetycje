import React from 'react';

import './Contact.scss';

import { BiMessageAltDetail } from 'react-icons/bi';

const Contact = ({ color }) => {
  return (
    <section className={`contact__container ${color}`}>
      <BiMessageAltDetail className='icon' />
      <h1>Kontakt</h1>
      <p>
        Osobiście preferuję napisanie do mnie przez Messengera{' '}
        <a
          href='https://www.facebook.com/mateusz.mancxzak/'
          target='_blank'
          rel='noreferrer'>
          napisz
        </a>
        , lecz w razie szczegółowych pytań zostawiam również swój numer
        telefonu. 725 726 901
      </p>
    </section>
  );
};

export default Contact;
