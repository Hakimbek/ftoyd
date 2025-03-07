import { useState } from 'react';
import ArrowIcon from '../assets/FilterArrowIcon.tsx';
import { FilterType } from '../dto/Filter.ts';
import { useAppDispatch, useAppSelector } from '../app/hooks.ts';
import { updateFilter, selectFilter } from '../app/filterSlice.ts';

import './FilterButton.css';

const FilterButton = () => {
  const dispatch = useAppDispatch();
  const filterStatus = useAppSelector(selectFilter);
  const [isActive, setIsActive] = useState(false);

  const handleClick = (status: FilterType) => {
    dispatch(updateFilter(status));
    setIsActive(false);
  };

  return (
    <div className="filter-container">
      <button className="filter-button" onClick={() => setIsActive(!isActive)}>
        {filterStatus}
        <ArrowIcon isActive={isActive} />
      </button>
      {isActive && (
        <div className="filter-options">
          {Object.values(FilterType).map((filterItem) => (
            <button
              key={filterItem}
              disabled={filterStatus === filterItem}
              className="option-button"
              onClick={() => handleClick(filterItem)}
            >
              {filterItem}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterButton;
