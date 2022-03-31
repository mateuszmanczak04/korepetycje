import React from 'react';
import './Footer.scss';

import { BsFacebook } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { FaTiktok } from 'react-icons/fa';
import { MdOutgoingMail } from 'react-icons/md';

const Footer = ({ color }) => {
  return (
    <section className={`footer__container ${color}`}>
      <a
        href='https://www.facebook.com/mateusz.mancxzak/'
        target='_blank'
        rel='noreferrer'>
        <BsFacebook />
      </a>
      <a
        href='https://www.instagram.com/klucznik.pl/'
        target='_blank'
        rel='noreferrer'>
        <GrInstagram />
      </a>
      <a
        href='https://www.tiktok.com/@matemaniu'
        target='_blank'
        rel='noreferrer'>
        <FaTiktok />
      </a>
      <a
        href='mailto:mateuszmanczak16@gmail.com'
        target='_blank'
        rel='noreferrer'>
        {' '}
        <MdOutgoingMail />
      </a>
    </section>
  );
};

export default Footer;
