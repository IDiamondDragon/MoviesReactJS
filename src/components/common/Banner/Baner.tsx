import React from "react";

import { useRedirectToSearchPage } from '../../../services/hooks/useRedirectToSearchPage';

import baner from "../../../assets/images/shared/Banner/netflix.png";
import styles from './Baner.module.scss';



export interface BanerProps {
  className: string
}

export function Baner({ className }: BanerProps): JSX.Element {
  const redirectToSearchPage = useRedirectToSearchPage();
  
  return (
    <img className={`${styles.baner} ${className}`} src={baner} onClick={redirectToSearchPage}/>
  );
}

export default Baner