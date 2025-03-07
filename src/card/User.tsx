import Player from '../dto/Player.ts';
import avatar from '../assets/avatar.png';

import './User.css';

const User = ({ username, kills }: Player) => {
  return (
    <div className="user-container">
      <div className="username">
        <img src={avatar} alt="Avatar" />
        {username}
      </div>
      <div className="kills">
        Убийств: <span className="kills-count">{kills}</span>
      </div>
    </div>
  );
};

export default User;
