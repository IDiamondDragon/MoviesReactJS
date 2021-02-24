import React from 'react';
import { render } from '@testing-library/react';
import Baner from './Baner';


jest.mock('../../../services/hooks/useRedirectToSearchPage', () => {
  return {
      useRedirectToSearchPage: jest.fn().mockImplementation(() => {
      return () => ({});
    }),
  };
});


describe('Baner', () => {

  test("renders correctly", () => {
      const { asFragment } = render(<Baner className="" />);

      expect(asFragment()).toMatchSnapshot();
  })

});
