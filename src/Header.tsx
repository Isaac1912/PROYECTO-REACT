import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Blog Personal</h1>
      <div className="search-bar">
        <input type="text" placeholder="Buscar" />
        <button>Buscar</button>
      </div>
    </header>
  );
};

export default Header;
