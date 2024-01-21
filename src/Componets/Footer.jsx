import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-green-500 text-white p-4 h-25">
      <div className=" mx-auto flex items-center justify-center">
        <Logo/>
        <p className="text-sm font-bold   ">&copy; ELEDEV</p>
      </div>
    </footer>
  );
};

export default Footer;

