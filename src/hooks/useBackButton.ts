import {useRouteMatch} from 'react-router-dom';

interface IUseBackButtonValue {
  backPath: string;
  hideBackButton: boolean;
}

const useBackButton = (): IUseBackButtonValue => {
  const match = useRouteMatch();

  const arr = match.path.split('/');

  const currPage = arr[arr.length - 1];

  const parentPath = arr.filter((item) => item !== currPage).join('/');

  const hideBackButton = parentPath.length === 3;

  return {
    hideBackButton,
    backPath: parentPath,
  };
};

export default useBackButton;
