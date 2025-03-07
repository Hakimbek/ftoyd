import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterType } from '../dto/Filter.ts';
import { RootState } from './store.ts';

interface FilterState {
  filter: FilterType;
}

const initialState: FilterState = {
  filter: FilterType.ALL,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter(state: FilterState, action: PayloadAction<FilterType>) {
      state.filter = action.payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export const selectFilter = (state: RootState) => state.filter.filter;

export default filterSlice.reducer;
