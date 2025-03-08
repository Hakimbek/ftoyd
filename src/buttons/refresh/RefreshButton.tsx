import RefreshIcon from '../../assets/svg/refresh/RefreshIcon.tsx';
import AlertIcon from '../../assets/svg/alert/AlertIcon.tsx';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import {
  refetchGames,
  selectIsLoading,
  selectIsError,
} from '../../app/apiSlice.ts';

import './RefreshButton.css';

const RefreshButton = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(selectIsLoading);
  const isError = useAppSelector(selectIsError);

  return (
    <div className="refresh flex">
      {isError && (
        <div className="alert inter-font font-big flex">
          <AlertIcon />
          Ошибка: не удалось загрузить информацию
        </div>
      )}
      <button
        className="button inter-font font-big flex"
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
