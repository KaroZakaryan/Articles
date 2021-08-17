import React, {useCallback, useMemo} from 'react';
import {useIntl} from 'react-intl';
import {Dropdown} from 'react-bootstrap';
import {Link, useLocation} from 'react-router-dom';

import {AppLanguage} from '~/constants';
import {useWindowSize} from '~/hooks';

import styles from './LanguageSwitcher.module.scss';

const LanguageSwitcher: React.FC = () => {
  const {pathname} = useLocation();
  const {isMobile} = useWindowSize();
  const {locale, messages} = useIntl();

  const toggleSize = useMemo(() => (isMobile ? 'sm' : undefined), [isMobile]);

  const renderDropdownLangItems = useCallback(
    () =>
      Object.values(AppLanguage).map((langItem) => (
        <Dropdown.Item
          as={Link}
          key={langItem}
          to={`/${langItem}/${pathname.substr(4)}`}
          active={locale === langItem}>
          {messages[langItem]}
        </Dropdown.Item>
      )),
    [locale, messages, pathname],
  );

  return (
    <Dropdown className={styles.container}>
      <Dropdown.Toggle
        variant="dark"
        size={toggleSize}
        className={styles.container__btn}>
        {messages[locale]}
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark" className={styles.container__menu}>
        {renderDropdownLangItems()}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
