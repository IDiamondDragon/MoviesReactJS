import { useEffect } from 'react';

export const useComponentDidMount = (callback: () => void): void => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { callback() }, []);
}