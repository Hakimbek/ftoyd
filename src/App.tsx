import Header from './header/Header.tsx';
import { useGetGamesQuery } from './app/apiSlice.ts';
import CardList from './card/CardList.tsx';

function App() {
  const { data } = useGetGamesQuery();

  return (
    <>
      <Header />
      {data && <CardList matches={data.data.matches} />}
    </>
  );
}

export default App;
