import User from './User.tsx';
import Team from '../dto/Team.ts';

import './Details.css';

interface DetailsProps {
  homeTeam: Team;
  awayTeam: Team;
}

const Details = ({ homeTeam, awayTeam }: DetailsProps) => {
  return (
    <div className="details-container">
      <div className="details">
        <div className="users">
          {homeTeam.players.map(({ username, kills }) => (
            <User key={username} kills={kills} username={username} />
          ))}
        </div>
        <div className="additional-details">
          <div className="title">
            Points: <span className="count">{+homeTeam.points}</span>
          </div>
          <div className="title">
            Место: <span className="count">{homeTeam.place}</span>
          </div>
          <div className="title">
            Всего убитых: <span className="count">{homeTeam.total_kills}</span>
          </div>
        </div>
      </div>
      <div className="details">
        <div className="users">
          {awayTeam.players.map(({ username, kills }) => (
            <User key={username} kills={kills} username={username} />
          ))}
        </div>
        <div className="additional-details">
          <div className="title">
            Points: <span className="count">{+awayTeam.points}</span>
          </div>
          <div className="title">
            Место: <span className="count">{awayTeam.place}</span>
          </div>
          <div className="title">
            Всего убитых: <span className="count">{awayTeam.total_kills}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
