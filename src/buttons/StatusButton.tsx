import { MatchStatus } from '../dto/Match.ts';
import { memo } from 'react';

import './StatusButton.css';

const StatusButton = ({ status }: { status: MatchStatus }) => {
  return <button className={`status-button ${status.toLowerCase()}`}></button>;
};

export default memo(StatusButton);
