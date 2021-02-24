import React from "react";

import { useRedirectToSearchPage } from '../../../../services/hooks/useRedirectToSearchPage';

import styles from './SearchIcon.module.scss';


interface SearchIconProps {
  className: string
}

export function SearchIcon({ className }: SearchIconProps): JSX.Element {
  const redirectToSearchPage = useRedirectToSearchPage();

  return (
    <i className={`${styles['search-icon']} ${className}`} onClick={redirectToSearchPage} />
  );
}

export default React.memo(SearchIcon)