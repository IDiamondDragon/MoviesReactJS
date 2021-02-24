import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';


jest.mock('../../../services/hooks/useRedirectToSearchPage', () => {
  return {
      useRedirectToSearchPage: jest.fn().mockImplementation(() => {
      return () => ({});
    }),
  };
});


describe('<Footer />', () => {

  test("renders correctly", () => {
      const { asFragment } = render(<Footer />);

      expect(asFragment()).toMatchSnapshot();
  })

});
