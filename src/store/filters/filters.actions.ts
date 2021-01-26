import { IFilters } from '../../models/common/interfaces/IFilters';
import { SET_FILTERS, FiltersActionTypes } from './filters.types'


export function setFiltersAction(filters: IFilters): FiltersActionTypes {
  return {
    type: SET_FILTERS,
    payload: filters
  }
}
