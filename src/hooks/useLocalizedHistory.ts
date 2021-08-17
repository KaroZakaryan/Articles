import {useCallback} from 'react';
import {useIntl} from 'react-intl';
import {useHistory} from 'react-router-dom';

interface IUseLocalizedHistoryValue {
  push: (path: string) => void;
}

const useLocalizedHistory = (): IUseLocalizedHistoryValue => {
  const {locale} = useIntl();
  const history = useHistory();

  const push = useCallback(
    (path: string) => {
      history.push(`/${locale}${path}`);
    },
    [history, locale],
  );

  return {
    push,
  };
};

export default useLocalizedHistory;
