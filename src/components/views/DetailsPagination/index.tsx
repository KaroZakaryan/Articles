import React from 'react';
import {useIntl} from 'react-intl';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {Pagination, Row} from 'react-bootstrap';
import {ChevronLeft, ChevronRight} from 'react-bootstrap-icons';

import {IDetailsPaginationProps} from './types';
import styles from './DetailsPagination.module.scss';

const DetailsPagination: React.FC<IDetailsPaginationProps> = ({
  prevArticleId,
  nextArticleId,
}) => {
  const {locale, formatMessage} = useIntl();

  const isPrevExisted = !!prevArticleId;
  const isNextExisted = !!nextArticleId;
  const paginationClasses = classNames(styles.container__pagination, {
    [styles.container__pagination__noprev]: !isPrevExisted,
    [styles.container__pagination__nonext]: !isNextExisted,
  });

  return (
    <Row className={styles.container}>
      <Pagination className={paginationClasses}>
        {isPrevExisted && (
          <Link
            to={`/${locale}/articles/${prevArticleId}`}
            className={styles.container__pagination__item}>
            <ChevronLeft fill="white" />
            {formatMessage({id: 'pagination.prev'})}
          </Link>
        )}
        {isNextExisted && (
          <Link
            to={`/${locale}/articles/${nextArticleId}`}
            className={styles.container__pagination__item}>
            {formatMessage({id: 'pagination.next'})}
            <ChevronRight fill="white" />
          </Link>
        )}
      </Pagination>
    </Row>
  );
};

export default DetailsPagination;
