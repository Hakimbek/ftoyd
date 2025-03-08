import User from '../user/User.tsx';
import Detail from '../details/Detail.tsx';
import TeamType from '../../dto/Team.ts';

import './Team.css';

interface TeamProps {
  team: TeamType;
}

const Team = ({ team }: TeamProps) => {
  return (
    <div className="team">
      <div className="users">
        {team.players.map(({ username, kills }) => (
          <User key={username} kills={kills} username={username} />
        ))}
      </div>
      <div className="additional-details flex">
        <Detail name={'Points'} value={+team.points} />
        <Detail name={'Место'} value={team.place} />
        <Detail name={'Всего убитых'} value={team.total_kills} />
      </div>
    </div>
  );
};

export default Team;
