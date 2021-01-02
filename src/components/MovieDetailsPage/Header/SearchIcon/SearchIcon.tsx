import React from "react";

import styles from './SearchIcon.module.scss';


interface SearchIconProps {
  className: string
}

export function SearchIcon({ className }: SearchIconProps): JSX.Element {

  return (
    <i className={`${styles['search-icon']} ${className}`}>
    </i>
  );
}

export default SearchIcon