import React from 'react';
import {useIntl} from 'react-intl';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {Book, ChevronLeft} from 'react-bootstrap-icons';
import {Button, Col, Container, Navbar} from 'react-bootstrap';

import {useBackButton} from '~/hooks';
import {IScreenCommonProps} from '~/types';

import styles from './Screen.module.scss';

const ScreenLayout: React.FC<IScreenCommonProps> = ({title, children}) => {
  const {locale, formatMessage} = useIntl();
  const {hideBackButton, backPath} = useBackButton();
  const navbarLeftClasses = classNames(styles.container__navbar__left, {
    [styles.container__navbar__left_noback]: hideBackButton,
  });

  return (
    <Container className={styles.container} fluid>
      <Navbar bg="light" sticky="top" className={styles.container__navbar}>
        <Container className={styles.container__navbar__inner}>
          <Col className={navbarLeftClasses}>
            {!hideBackButton ? (
              <Button
                as={Link}
                to={backPath}
                variant="transparent"
                className={styles.container__navbar__back}>
                <ChevronLeft fill="white" />
              </Button>
            ) : null}
            <Navbar.Brand className={styles.container__navbar__brand}>
              {title}
            </Navbar.Brand>
          </Col>

          <Navbar.Brand
            as={Link}
            to={`/${locale}/articles`}
            className={styles.container__navbar__brand}>
            <Book />
            <i>{formatMessage({id: 'appName'})}</i>
            <Book />
          </Navbar.Brand>
        </Container>
      </Navbar>
      {children}
    </Container>
  );
};

export default ScreenLayout;
