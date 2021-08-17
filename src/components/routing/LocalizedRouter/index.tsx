import React, {useCallback} from 'react';
import {IntlProvider} from 'react-intl';
import {Redirect, Route} from 'react-router-dom';

import {AppLanguage, AppRoute} from '~/constants';

import {ILocalizedRouterProps} from './types';

const LocalizedRouter: React.FC<ILocalizedRouterProps> = ({
  children,
  appStrings,
  RouterComponent,
  defaultLanguage,
}) => {
  const renderRouteChildren = useCallback(
    ({match, location: {pathname}}) => {
      const detectedParams = match?.params || {};
      const {lang = defaultLanguage || AppLanguage.English} = detectedParams;
      const langPathname = `/${lang}/articles`;
      const isValidLocale = Object.values(AppLanguage).includes(lang);

      if (!pathname.includes(langPathname)) {
        return <Redirect to={langPathname} />;
      }

      if (!isValidLocale) {
        return <Redirect to={`/${AppLanguage.English}/articles`} />;
      }

      return (
        <IntlProvider locale={lang} messages={appStrings[lang]}>
          {children}
        </IntlProvider>
      );
    },
    [appStrings, children, defaultLanguage],
  );

  return (
    <RouterComponent>
      <Route path={AppRoute.Lang}>{renderRouteChildren}</Route>
    </RouterComponent>
  );
};

export default LocalizedRouter;
