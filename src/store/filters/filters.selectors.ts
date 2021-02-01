import {createSelector, OutputSelector} from "reselect";

import { IFilters } from '../../models/common/interfaces/IFilters';
import { RootState } from '../store';


const _getFilters = (state: RootState) => state.filters.filters;


export const getSearchQuerySelector: OutputSelector<RootState, string | undefined, (res: IFilters) => string | undefined> = 
    createSelector(_getFilters, filters => filters.search);
