import { motion } from 'framer-motion';

import './Detail.css';

interface DetailsProps {
  name: string;
  value: string | number;
}

const Detail = ({ name, value }: DetailsProps) => {
  return (
    <div className="detail inter-font font-small">
      {name}:{' '}
      <span className="value inter-font font-normal">
        <motion.span
          key={value}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.4 }}
        >
          {value}
        </motion.span>
      </span>
    </div>
  );
};

export default Detail;
