import TeamType from '../../dto/Team.ts';
import Team from '../team/Team.tsx';

import './Details.css';

interface DetailsProps {
  homeTeam: TeamType;
  awayTeam: TeamType;
}

const Details = ({ homeTeam, awayTeam }: DetailsProps) => {
  return (
    <div className="details flex">
      <Team team={homeTeam} />
      <div className="vs-line">
        <hr className="hr" />
        <span className="inter-font font-normal">VS</span>
        <hr className="hr" />
      </div>
      <Team team={awayTeam} />
    </div>
  );
};

export default Details;
