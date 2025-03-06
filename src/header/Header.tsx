import RefreshButton from '../buttons/RefreshButton.tsx';

import './Header.css';

const Header = () => {
  return (
    <header className="container">
      <h1 className="logo">Match Tracker</h1>
      <RefreshButton />
    </header>
  );
};

export default Header;
