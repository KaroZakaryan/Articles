import React from 'react';
import {Helmet} from 'react-helmet';
import {Container} from 'react-bootstrap';

import styles from './Helmet.module.scss';
import {IHelmetLayoutProps} from './types';

const HelmetLayout: React.FC<IHelmetLayoutProps> = ({
  children,
  title,
  metaDescription,
}) => (
  <Container className={styles.container}>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
    <Container className={styles.container__children}>{children}</Container>
  </Container>
);

export default HelmetLayout;
