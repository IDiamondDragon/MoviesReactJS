import { filtersReducer, IFiltersState, INITIAL_STATE } from './filters.reducer';
import { setFiltersAction } from './filters.actions';

describe('moviesReducer', () => {
  test("default", () => {
      const state: IFiltersState = filtersReducer(undefined, {type: 'none'} as any)
      expect(state).toEqual(INITIAL_STATE);
  })

  test("SET_FILTERS", () => {
      const newFilters = INITIAL_STATE.filters;
      newFilters.search = 'Test';

      const state: IFiltersState = filtersReducer(undefined, setFiltersAction(newFilters))
      expect(state.filters).toEqual(newFilters);
  })
});
