import React from 'react';
import { render, screen } from '@testing-library/react';
import { intialValueMovie } from '../../../../services/data/initialValueMovie';

import ConterMovies from './CounterMovies';

function renderConterMovies() {
  return render(<ConterMovies />)
}

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
      ...ActualReactRedux,
      useSelector: jest.fn().mockImplementation(() => {
          return [intialValueMovie(), intialValueMovie()];
      }),
  };
});

describe('<ConterMovies />', () => {
      afterAll(() => jest.unmock("react-redux"));

    test('display "2" movies number', async () => {
        renderConterMovies()   

        expect(screen.getByText('2')).toBeInTheDocument();
    });
});
