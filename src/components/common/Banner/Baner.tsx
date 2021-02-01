import React from "react";

import { useRedirectToSearchPage } from '../../../services/hooks/useRedirectToSearchPage';

import baner from "../../../assets/images/shared/Banner/netflix.png";
import styles from './Banner.module.scss';



export interface BannerProps {
  className: string
}

export function Banner({ className }: BannerProps): JSX.Element {
  const redirectToSearchPage = useRedirectToSearchPage();
  
  return (
    <img className={`${styles.baner} ${className}`} src={baner} onClick={redirectToSearchPage}/>
  );
}

export default Banner