import React from "react";

import {
  Menu,
  MenuItem
} from '@szhsin/react-menu';

import "../../../styles/components/dropdown-menu.scss";
import styles from './DropdownMenu.module.scss';

export interface DropdownMenuProps {
  onOpenEditMovieModal: (e: React.MouseEvent) => void;
  onOpenDeleteMovieModal: (e: React.MouseEvent) => void;
  className: string
}

export function DropdownMenu({ className, onOpenEditMovieModal, onOpenDeleteMovieModal}: DropdownMenuProps): JSX.Element {
  const stopPropogation = (e: React.MouseEvent): void => {
    e.stopPropagation();
  }
  
  return (
    <div className="stop-propogation-menu-click-event" onClick={stopPropogation}>
      <Menu className={styles['menu']}  
        menuButton={<div className={`${styles['menu__tree-dots']} ${className}`} ></div>}>
        <MenuItem className={styles['menu__item']} onClick={onOpenEditMovieModal}>Edit</MenuItem>
        <MenuItem className={styles['menu__item']} onClick={onOpenDeleteMovieModal}>Delete</MenuItem>
      </Menu>
    </div>
  );
}

export default DropdownMenu