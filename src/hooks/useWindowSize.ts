import {useState, useEffect} from 'react';

interface IWindowSize {
  width: number;
  height: number;
}

interface IUseWindowSizeValue {
  isMobile: boolean;
  windowSize: IWindowSize;
}

const useWindowSize = (): IUseWindowSizeValue => {
  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowSize.width <= 375;

  return {windowSize, isMobile};
};

export default useWindowSize;
