/* eslint-disable react-hooks/rules-of-hooks */
import { DependencyList, useEffect, useRef } from 'react';

export const useComponentDidMount = (callback: () => void, memo: DependencyList = []): void => {
  const flag = useRef(false);

  if (!flag.current) {
    flag.current = true;
    return;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { callback() }, memo);
}