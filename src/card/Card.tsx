import Match from '../dto/Match.ts';
import LogoIcon from '../assets/LogoIcon.tsx';
import StatusButton from '../buttons/StatusButton.tsx';

import './Card.css';

const Card = ({ homeScore, awayScore, status, homeTeam, awayTeam }: Match) => {
  return (
    <div className="card-container">
      <div className="team-name">
        <LogoIcon />
        {homeTeam.name}
      </div>
      <div className="score-status-container">
        <div className="score">
          {homeScore} : {awayScore}
        </div>
        <StatusButton status={status} />
      </div>
      <div className="team-name">
        {awayTeam.name}
        <LogoIcon />
      </div>
    </div>
  );
};

export default Card;
