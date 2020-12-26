import React from "react";

import baner from "../../../assets/images/shared/Banner/netflix.png";
import styles from './Banner.module.scss';

export interface BannerProps {
  className: string
}

export function Banner({ className }: BannerProps): JSX.Element {
  return (
    <img className={`${styles.baner} ${className}`} src={baner} />
  );
}

export default Banner