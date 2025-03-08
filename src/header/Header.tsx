import RefreshButton from '../buttons/refresh/RefreshButton.tsx';
import FilterButton from '../buttons/filter/FilterButton.tsx';

import './Header.css';

const Header = () => {
  return (
    <header className="header flex">
      <div className="logo flex">
        <h1 className="logo__text tactic-font">Match Tracker</h1>
        <FilterButton />
      </div>
      <RefreshButton />
    </header>
  );
};

export default Header;
