import Card from './Card.tsx';
import Match from '../dto/Match.ts';

import './CardList.css';

const CardList = ({ matches }: { matches: Match[] }) => {
  return (
    <div className="cards-container">
      {matches.map((match) => (
        <Card key={match.title} {...match} />
      ))}
    </div>
  );
};

export default CardList;
