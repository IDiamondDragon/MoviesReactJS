import React from "react";
import styles from './FiltersPanel.module.scss';

const filters: string[] = ["ALL", "DOCUMENTARY", "COMEDY", "HORROR", "CRIME"];

export interface FiltersPanelProps {
  className?: string
}

export function FiltersPanel({ className }: FiltersPanelProps): JSX.Element {
  return (
    <div className={`${styles['filters-panel']} ${className}`}>
      <div className={styles['filters']}>
        {
          filters.map( (filter, index) => {
            if (index === 0) {
              return <div className={styles['filter'] + ' ' + styles['filter--selected'] } key={filter}>{ filter }</div>
            }

            return <div className={styles['filter']} key={filter}>{ filter }</div>
          })
        }
      </div>
      <div className={styles['sort']}>
        <span className={styles['sort__title']}>SORT BY</span>
        <span className={styles['sort__combobox']}>RELEASE DATE 
            <i className={`${styles['arrow']} ${styles['down']}`}></i>
        </span>
      </div>
    </div>
  );
}

export default FiltersPanel