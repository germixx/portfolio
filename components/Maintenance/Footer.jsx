import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p className='text-black'>&copy; {currentYear} Jeremy Goolsby. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;