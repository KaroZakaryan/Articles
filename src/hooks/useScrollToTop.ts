import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const useScrollToTop = (): null => {
  const {pathname, key} = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, key]);

  return null;
};

export default useScrollToTop;
