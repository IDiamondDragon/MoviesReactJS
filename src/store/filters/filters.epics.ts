import { Epic, ofType } from "redux-observable";
import { map } from 'rxjs/operators';

import { ActionsType, RootState } from '../store';
import { SET_FILTERS } from './filters.types';
import { getMoviesAction } from '../movies/movies.actions';

export const setFiltersEpic: Epic<
  ActionsType,
  ActionsType,
  RootState,
  unknown
> = (action$, store) =>
  action$.pipe(
    ofType(SET_FILTERS),
    map(() => ( getMoviesAction(store.value.filters.filters)))
  );

export default [setFiltersEpic];