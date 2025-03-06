import RefreshIcon from '../assets/RefreshIcon.tsx';
import AlertIcon from '../assets/AlertIcon.tsx';
import { useAppDispatch } from '../app/hooks.ts';
import { refetchGames } from '../app/apiSlice.ts';

import './RefreshButton.css';

const RefreshButton = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="container">
      <div className="alert">
        <AlertIcon />
        Ошибка: не удалось загрузить информацию
      </div>
      <button className="refresh-button" onClick={() => dispatch(refetchGames)}>
        Обновить
        <RefreshIcon />
      </button>
    </div>
  );
};

export default RefreshButton;
