import Card from './Card.tsx';
import { Matches } from '../dto/Match.ts';
import { useAppSelector } from '../app/hooks.ts';
import { selectFilter } from '../app/filterSlice.ts';
import filterLogic from './util/filterLogic.ts';

import './CardList.css';

const CardList = ({ matches }: Matches) => {
  const filterStatus = useAppSelector(selectFilter);
  const filteredMatches = matches.filter(filterLogic(filterStatus));

  return (
    <div className="cards-container">
      {filteredMatches.map((match) => (
        <Card key={match.title} {...match} />
      ))}
    </div>
  );
};

export default CardList;
