import React from 'react';
import {useIntl} from 'react-intl';

import {InnerScreenLayout} from '~/components';

import styles from './NoMatch.module.scss';

const NoMatchScreen: React.FC = () => {
  const {formatMessage} = useIntl();

  return (
    <InnerScreenLayout className={styles.container}>
      <h1 className={styles.container__title}>
        {formatMessage({id: 'noMatch.contentTitle'})}
      </h1>
    </InnerScreenLayout>
  );
};

export default NoMatchScreen;
