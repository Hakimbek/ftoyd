import Player from '../../dto/Player.ts';
import avatar from '../../assets/avatar.png';
import { motion } from 'framer-motion';

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
        <span className="kills-count inter-font font-normal">
          <motion.span
            key={kills}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.4 }}
          >
            {kills}
          </motion.span>
        </span>
      </div>
    </div>
  );
};

export default User;
