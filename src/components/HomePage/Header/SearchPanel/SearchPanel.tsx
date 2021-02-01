import React, { useCallback, useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../../../../services/hooks/useQuery';
import { useComponentDidMount } from '../../../../services/hooks/useComponentDidMount';

import { IFilters } from '../../../../models/common/interfaces/IFilters';

import { setFiltersAction } from '../../../../store/filters/filters.actions';

import styles from './SearchPanel.module.scss';




export interface SearchPanelProps {
  className: string
}

export function SearchPanel({ className }: SearchPanelProps): JSX.Element {
  const [search, setSearch] = useState('');

  const query = useQuery();
  const searchQuery = query.get('search');

  const history = useHistory();
  const dispatch = useDispatch();
  
  useComponentDidMount(() => {
    if (searchQuery) {
      setSearch(searchQuery);
    } 
  })

  const handleInputChange  = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setSearch(event.target.value);
  }


  const setFilters = useCallback(
    (filters: IFilters)=> dispatch(setFiltersAction(filters)),
    [dispatch]
  );


  const searchFilms = (e: React.MouseEvent): void => {
    if (!search) {
      query.delete('search');
    } else {
      query.set('search', search);
    }
    
    history.push({search: query.toString()});
    setFilters({search});
  };

  const onEnterKeyPress = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      searchFilms(null as unknown as React.MouseEvent);
    }
  }

  return (
    <div className={`${styles['search-panel']} ${className}`}>
      <div className={styles['search-panel__title']}>FIND YOUR MOVIE</div>
      <div className={styles.search}>
        <input className={styles['search__input']} 
               placeholder="What do you want to watch?"
               value={search}
               onChange={handleInputChange}
               onKeyPress={onEnterKeyPress} />
        <button className={styles['search__button']} onClick={searchFilms}>SEARCH</button>
      </div>
    </div>
  );
}

export default SearchPanel