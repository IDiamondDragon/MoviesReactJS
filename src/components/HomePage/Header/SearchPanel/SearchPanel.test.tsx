import React, { useState as useStateMock } from 'react'
import { render } from '@testing-library/react';
import SearchPanel from './SearchPanel';

function renderSearchPanel() {
  return render(<SearchPanel className="none" />)
}

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
      ...ActualReact,
      useState: jest.fn(),
  };
});

jest.mock('../../../../services/hooks/useQuery', () => {
  return {
    useQuery: jest.fn().mockImplementation(() => {
      return {
        get: jest.fn().mockImplementation(search => search)
      };
    }),
  };
});

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  return {
      ...ActualReactRedux,
      useDispatch: jest.fn().mockImplementation(() => {
          return () => null
      }),
  };
});


describe('SearchPanel', () => {
  const setSearch = jest.fn()

  beforeEach(() => {
    (useStateMock as jest.Mock).mockImplementation(search => [search, setSearch])
  })

  // check custom hook useComponentDidMount
  it('setSearch will be called only once when component is mounted when we will render it', () => {
      renderSearchPanel();

      expect(setSearch).toHaveBeenCalledTimes(1)
  })
})