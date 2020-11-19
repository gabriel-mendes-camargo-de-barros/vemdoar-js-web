import React from 'react';

import './style.css';

function Header() {
  return (
    <header className="header">
      <h2 className="header-logo"><strong className="titulo">vem</strong>Doar</h2>
      <div className="header-links">
        <a className="header-link" href="/">Home</a>
        <a className="header-link" href="/">Produtos</a>
        <a className="header-link-donate" href="/">Doar</a>
      </div>
    </header>
  );
}

export default Header;