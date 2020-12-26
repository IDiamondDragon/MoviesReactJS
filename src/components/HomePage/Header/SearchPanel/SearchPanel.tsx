import React from "react";
import styles from './SearchPanel.module.scss';

export interface SearchPanelProps {
  className: string
}

export function SearchPanel({ className }: SearchPanelProps): JSX.Element {
  return (
    <div className={`${styles['search-panel']} ${className}`}>
      <div className={styles['search-panel__title']}>FIND YOUR MOVIE</div>
      <div className={styles.search}>
        <input className={styles['search__input']} placeholder="What do you want to watch?"></input>
        <button className={styles['search__button']}>SEARCH</button>
      </div>
    </div>
  );
}

export default SearchPanel