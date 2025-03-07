import Card from './Card.tsx';
import { Matches } from '../dto/Match.ts';

import './CardList.css';

const CardList = ({ matches }: Matches) => {
  return (
    <div className="cards-container">
      {matches.map((match) => (
        <Card key={match.title} {...match} />
      ))}
    </div>
  );
};

export default CardList;
