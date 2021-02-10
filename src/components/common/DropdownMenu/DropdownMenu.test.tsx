import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import { DropdownMenuProps } from './DropdownMenu';
import DropdownMenu from './DropdownMenu';


function renderDropdownMenu(props: Partial<DropdownMenuProps> = {}) {
  const defaultProps: DropdownMenuProps = {
    onOpenEditMovieModal(e: React.MouseEvent): void {
      return;
    },
    onOpenDeleteMovieModal(e: React.MouseEvent): void {
      return;
    },
    className: ''
  }

  return render(<DropdownMenu {...defaultProps} {...props}/>)
}


describe('<DropdownMenu />', () => {
  
    test('should call method onOpenEditMovieModal', async () => {
        const onOpenEditMovieModal = jest.fn();
        const { container } = renderDropdownMenu({onOpenEditMovieModal});
        
        const menu = container.getElementsByClassName('menu__tree-dots')[0];

        userEvent.click(menu);
        userEvent.click(screen.getByText('Edit'));

        expect(onOpenEditMovieModal).toHaveBeenCalledTimes(1);
    });

    test('should call method onOpenDeleteMovieModal', async () => {
        const onOpenDeleteMovieModal = jest.fn();
        const { container } = renderDropdownMenu({onOpenDeleteMovieModal});
        
        const menu = container.getElementsByClassName('menu__tree-dots')[0];

        userEvent.click(menu);
        userEvent.click(screen.getByText('Delete'));

        expect(onOpenDeleteMovieModal).toHaveBeenCalledTimes(1);
  });
});
