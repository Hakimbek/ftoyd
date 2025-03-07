import LogoIcon from '../assets/LogoIcon.tsx';
import StatusButton from '../buttons/StatusButton.tsx';
import DetailsArrowIcon from '../assets/DetailsArrowIcon.tsx';
import { MatchStatus } from '../dto/Match.ts';

import './Result.css';

interface ResultProps {
  homeTeamName: string;
  homeScore: number;
  awayTeamName: string;
  awayScore: number;
  status: MatchStatus;
  isActive: boolean;
}

const Result = ({
  homeTeamName,
  homeScore,
  awayTeamName,
  awayScore,
  status,
  isActive,
}: ResultProps) => {
  return (
    <div className="result-container">
      <div className="result">
        <div className="team-name">
          <LogoIcon />
          {homeTeamName}
        </div>
        <div className="score-status-container">
          <div className="score">
            {homeScore} : {awayScore}
          </div>
          <StatusButton status={status} />
        </div>
        <div className="team-name">
          {awayTeamName}
          <LogoIcon />
        </div>
      </div>
      <DetailsArrowIcon isActive={isActive} />
    </div>
  );
};

export default Result;
