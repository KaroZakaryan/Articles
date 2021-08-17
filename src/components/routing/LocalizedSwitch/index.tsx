import React, {useCallback, useMemo} from 'react';
import {useIntl} from 'react-intl';
import {Switch, RouteProps} from 'react-router-dom';

const LocalizedSwitch: React.FC = ({children}) => {
  const {locale} = useIntl();

  const localedRoute = useMemo(() => `/${locale}`, [locale]);

  const renderSwitchChildren = useCallback(
    () =>
      React.Children.map(children, (child) =>
        React.isValidElement<RouteProps>(child)
          ? React.cloneElement(child, {
              ...child.props,
              path: `${localedRoute}${child.props.path}`,
            })
          : child,
      ),
    [children, localedRoute],
  );

  return <Switch>{renderSwitchChildren()}</Switch>;
};

export default LocalizedSwitch;
