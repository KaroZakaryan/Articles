import React, {useCallback} from 'react';
import {useIntl} from 'react-intl';
import {Route} from 'react-router-dom';

import {
  ScreenLayout,
  HelmetLayout,
  LocalizedSwitch,
  LanguageSwitcher,
} from '~/components';
import {routes} from '~/constants';
import {useScrollToTop} from '~/hooks';

const App: React.FC = () => {
  const {formatMessage} = useIntl();

  useScrollToTop();

  const renderSwitchRoutes = useCallback(
    () =>
      routes.map(({path, localizedKey, Component}) => {
        const formattedTitle = formatMessage({
          id: `${localizedKey}.title`,
        });
        const formattedContent = formatMessage({
          id: `${localizedKey}.content`,
        });
        const isErrorPage = localizedKey === 'noMatch';

        return (
          <Route key={path} exact={!isErrorPage} path={path}>
            <HelmetLayout
              title={formattedTitle}
              metaDescription={formattedContent}>
              <LanguageSwitcher />
              <ScreenLayout title={formattedTitle}>
                <Component />
              </ScreenLayout>
            </HelmetLayout>
          </Route>
        );
      }),
    [formatMessage],
  );

  return <LocalizedSwitch>{renderSwitchRoutes()}</LocalizedSwitch>;
};

export default App;
