import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getSearchQuerySelector } from './../../store/filters/filters.selectors';


export const useRedirectToSearchPage = (): () => void => {
  const history = useHistory();
  const search = useSelector(getSearchQuerySelector);

  const redirectToSearchPage = useCallback(
    () => {
      if (!search) {
        history.push({pathname: `/search`});
      } else {
        history.push({pathname: `/search`, search:`search=${search}`});
      }
    },
    [history, search],
  );

  return redirectToSearchPage
}