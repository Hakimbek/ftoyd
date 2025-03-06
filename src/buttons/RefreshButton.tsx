import RefreshIcon from '../assets/RefreshIcon.tsx';
import AlertIcon from '../assets/AlertIcon.tsx';

import './RefreshButton.css';

const RefreshButton = () => {
  return (
    <div className="container">
      <div className="alert">
        <AlertIcon />
        Ошибка: не удалось загрузить информацию
      </div>
      <button className="refresh-button">
        Обновить
        <RefreshIcon />
      </button>
    </div>
  );
};

export default RefreshButton;
