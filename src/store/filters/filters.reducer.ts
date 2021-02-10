import {
  FiltersActionTypes,
  SET_FILTERS
} from './filters.types'

import { IFilters } from '../../models/common/interfaces/IFilters';

export interface IFiltersState {
  filters: IFilters;
}

export const INITIAL_STATE: IFiltersState = {
  filters: {
    search: undefined,
    searchBy: 'title',
    sortBy: 'release_date',
    sortOrder: 'desc',
    filter: undefined
  }
}

export function filtersReducer(
  state = INITIAL_STATE,
  action: FiltersActionTypes
): IFiltersState {
  switch (action.type) {
    case SET_FILTERS:
      return {
        filters: { ...state.filters, ...action.payload}
      }
    default:
      return state
  }
}