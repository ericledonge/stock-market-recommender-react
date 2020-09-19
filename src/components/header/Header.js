import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__title">BSMR</div>
      <div className="header__subtitle">The First Stock Market Recommender Based On <strong>Behavioral Financal
        AI</strong>.
      </div>
    </div>
  );
};

export default Header;
