import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

export const useWindowSize = () => {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
  
  useEffect(() => {
    const debouncedResizeHandler = debounce(() => {
      setSize([window.innerWidth, window.innerHeight]);
    }, 100);

    window.addEventListener('resize', debouncedResizeHandler);
    return () => {
      debouncedResizeHandler.cancel();
      window.removeEventListener('resize', debouncedResizeHandler);
    };
  }, []);
  return size;
};