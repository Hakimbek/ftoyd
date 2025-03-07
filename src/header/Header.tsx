import RefreshButton from '../buttons/RefreshButton.tsx';
import FilterButton from '../buttons/FilterButton.tsx';

import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="left-container">
        <h1 className="logo">Match Tracker</h1>
        <FilterButton />
      </div>
      <RefreshButton />
    </header>
  );
};

export default Header;
