import { IFilters } from '../../models/common/interfaces/IFilters';

export const SET_FILTERS = '[FILTERS] SET_FILTERS'

interface SetFiltersAction {
  type: typeof SET_FILTERS
  payload: IFilters
}

export type FiltersActionTypes = SetFiltersAction;