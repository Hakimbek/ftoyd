import RefreshIcon from '../assets/RefreshIcon.tsx';
import AlertIcon from '../assets/AlertIcon.tsx';
import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import {
  refetchGames,
  selectIsLoading,
  selectIsError,
} from '../app/apiSlice.ts';

import './RefreshButton.css';

const RefreshButton = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const isError = useAppSelector(selectIsError);

  return (
    <div className="button-container">
      {isError && (
        <div className="alert">
          <AlertIcon />
          Ошибка: не удалось загрузить информацию
        </div>
      )}
      <button
        className="refresh-button"
        disabled={isLoading}
        onClick={() => dispatch(refetchGames)}
      >
        Обновить
        <RefreshIcon />
      </button>
    </div>
  );
};

export default RefreshButton;
