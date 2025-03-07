import Match from '../dto/Match.ts';
import Result from './Result.tsx';
import { useState } from 'react';
import Details from './Details.tsx';

import './Card.css';

const Card = ({ homeScore, awayScore, status, homeTeam, awayTeam }: Match) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div onClick={() => setIsActive(!isActive)} className="card-container">
      <Result
        homeTeamName={homeTeam.name}
        homeScore={homeScore}
        awayTeamName={awayTeam.name}
        awayScore={awayScore}
        status={status}
        isActive={isActive}
      />
      {isActive && <Details homeTeam={homeTeam} awayTeam={awayTeam} />}
    </div>
  );
};

export default Card;
