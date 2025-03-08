import LogoIcon from '../../assets/svg/logo/LogoIcon.tsx';
import StatusButton from '../../buttons/status/StatusButton.tsx';
import DetailsArrowIcon from '../../assets/svg/arrow/DetailsArrowIcon.tsx';
import { MatchStatus } from '../../dto/Match.ts';
import { motion } from 'framer-motion';

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
    <div className="result-container flex">
      <div className="result flex">
        <div className="team-name inter-font font-normal flex">
          <LogoIcon />
          {homeTeamName}
        </div>
        <div className="score-status-container">
          <div className="score inter-font">
            <motion.div
              key={`${homeScore}-${awayScore}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              transition={{ duration: 0.4 }}
            >
              {homeScore} : {awayScore}
            </motion.div>
          </div>
          <StatusButton status={status} />
        </div>
        <div className="team-name inter-font font-normal flex">
          {awayTeamName}
          <LogoIcon />
        </div>
      </div>
      <DetailsArrowIcon isActive={isActive} />
    </div>
  );
};

export default Result;
