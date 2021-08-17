import React from 'react';
import {Container} from 'react-bootstrap';
import classNames from 'classnames';

import styles from './InnerScreen.module.scss';
import {IInnerScreenLayoutProps} from './types';

const InnerScreenLayout: React.FC<IInnerScreenLayoutProps> = ({
  children,
  className,
}) => (
  <Container
    className={classNames(styles.container, {
      [`${className}`]: className,
    })}>
    {children}
  </Container>
);

export default InnerScreenLayout;
