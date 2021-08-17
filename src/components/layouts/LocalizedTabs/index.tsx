import React, {useCallback} from 'react';
import {useIntl} from 'react-intl';
import {Tab, Tabs} from 'react-bootstrap';

import {AppLanguage} from '~/constants';

import styles from './LocalizedTabs.module.scss';

const LocalizedTabsLayout: React.FC = ({children}) => {
  const {messages} = useIntl();

  const renderTabs = useCallback(
    () =>
      Object.values(AppLanguage).map((langItem, index) => (
        <Tab
          key={langItem}
          eventKey={langItem}
          title={messages[langItem]}
          tabClassName={styles.tab}
          className={styles.tab__content}>
          {Array.isArray(children) ? children[index] : null}
        </Tab>
      )),
    [children, messages],
  );

  return (
    <Tabs variant="pills" defaultActiveKey={AppLanguage.English}>
      {renderTabs()}
    </Tabs>
  );
};

export default LocalizedTabsLayout;
