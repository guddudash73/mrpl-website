import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterState } from '@/types';

const initialState: FilterState = {
  location: 'All Locations',
  plotType: 'All Types',
  sizeRange: 'Any Size',
  searchQuery: '',
  sortBy: 'price-asc',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setPlotType: (state, action: PayloadAction<string>) => {
      state.plotType = action.payload;
    },
    setSizeRange: (state, action: PayloadAction<string>) => {
      state.sizeRange = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action: PayloadAction<FilterState['sortBy']>) => {
      state.sortBy = action.payload;
    },
    resetFilters: (state) => {
      state.location = 'All Locations';
      state.plotType = 'All Types';
      state.sizeRange = 'Any Size';
      state.searchQuery = '';
      state.sortBy = 'price-asc';
    },
  },
});

export const {
  setLocation,
  setPlotType,
  setSizeRange,
  setSearchQuery,
  setSortBy,
  resetFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
