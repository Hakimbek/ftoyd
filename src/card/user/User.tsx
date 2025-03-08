import Player from '../../dto/Player.ts';
import avatar from '../../assets/avatar.png';

import './User.css';

const User = ({ username, kills }: Player) => {
  return (
    <div className="user flex">
      <div className="username inter-font font-normal flex">
        <img className="avatar" src={avatar} alt="Avatar" />
        {username}
      </div>
      <div className="kills inter-font font-small">
        Убийств:{' '}
        <span className="kills-count inter-font font-normal">{kills}</span>
      </div>
    </div>
  );
};

export default User;
