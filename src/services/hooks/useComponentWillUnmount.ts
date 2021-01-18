import { useEffect } from 'react';

export const useComponentWillUnmount = (callback: () => void): void => {
  useEffect(() => callback);
}