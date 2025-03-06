import Header from './header/Header.tsx';
import { useGetGamesQuery } from './app/apiSlice.ts';

import './App.css';

function App() {
  const { data } = useGetGamesQuery();
  console.log(data);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
