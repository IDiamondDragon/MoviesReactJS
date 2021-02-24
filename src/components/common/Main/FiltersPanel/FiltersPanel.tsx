import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import Select, { ActionMeta, ValueType, OptionTypeBase } from 'react-select';
import { IFilters } from '../../../../models/common/interfaces/IFilters';

import { setFiltersAction } from '../../../../store/filters/filters.actions';

import styles from './FiltersPanel.module.scss';


const filters: string[] = ["All", "Documentary", "Comedy", "Horror", "Mystery"];

const SelectMemoized = React.memo(Select);

export interface FiltersPanelProps {
  className?: string
}

export function FiltersPanel({ className }: FiltersPanelProps): JSX.Element {
  const dispatch = useDispatch();

  const setFilters = useCallback(
    (filters: IFilters)=> dispatch(setFiltersAction(filters)),
    [dispatch]
  );
  
  const handleSelectChange = (value: ValueType<{ label: string; value: string}, boolean>, actionMeta: ActionMeta<OptionTypeBase>): void => {
    value = value as { label: string; value: string};
    
    setFilters({ sortBy: value.value });
  }

  const handleClickOnFilterPanel = (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const filterSelectedStyle = styles['filter--selected'];
    const target: HTMLDivElement = event.target as unknown as HTMLDivElement;
    const selectedGener = target.getAttribute('data-gener');

    if (event.currentTarget === event.target) {
      return
    }

    resetSelectedElement(event.currentTarget, filterSelectedStyle);

    target.className += ' ' + filterSelectedStyle;
    
    if (selectedGener === 'All') {
      setFilters({ filter: '' });

      return;
    }

    setFilters({ filter: selectedGener });
  }

  const sortingOptions: ReadonlyArray<{ label: string; value: string; }> = [
      {value: 'release_date', label: 'RELEASE DATE'},
      {value: 'vote_average', label: 'RATING'}
    ];

  return (
    <div className={`${styles['filters-panel']} ${className}`}>
      <div className={styles['filters']} onClick={handleClickOnFilterPanel}>
        {
          filters.map( (filter, index) => {
            if (index === 0) {
              return <div data-gener={filter} className={styles['filter'] + ' ' + styles['filter--selected'] } key={filter}>{ filter }</div>
            }

            return <div data-gener={filter} className={styles['filter']} key={filter}>{ filter }</div>
          })
        }
      </div>
      <div className={styles['sort']}>
        <span className={styles['sort__title']}>SORT BY</span>
        {/* <span className={styles['sort__combobox']}>RELEASE DATE 
            <i className={`${styles['arrow']} ${styles['down']}`}></i>
        </span> */}
        <SelectMemoized
              closeMenuOnSelect
              className={`react-select-container ${styles['sort__combobox']} `}
              classNamePrefix="react-select"
              defaultValue={sortingOptions[0]}
              options={sortingOptions}
              onChange={handleSelectChange}
              // styles={colourStyles}
        />
      </div>
    </div>
  );
}

function resetSelectedElement(parent: HTMLDivElement, filterSelectedStyle) {
  
  for (let i = 0; i < parent.children.length; i++) {
    parent.children[i].className = parent.children[i].className.replace(filterSelectedStyle, "");
  }
  
}


export default React.memo(FiltersPanel)