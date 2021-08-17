import React, {useCallback} from 'react';
import {useIntl} from 'react-intl';
import {Link} from 'react-router-dom';
import {Button, Col} from 'react-bootstrap';
import {PlusCircleFill} from 'react-bootstrap-icons';

import {useArticles} from '~/hooks';
import {AppRoute} from '~/constants';
import {ArticleCard, InnerScreenLayout} from '~/components';

import styles from './ArticlesListing.module.scss';

const ArticlesListingScreen: React.FC = () => {
  const {filteredArticles} = useArticles();
  const {locale, formatMessage} = useIntl();

  const renderArticles = useCallback(
    () =>
      filteredArticles.map(({id, content}) => {
        const {title, content: articleContent} = content[locale];

        return (
          <ArticleCard
            id={id}
            key={id}
            title={title}
            date={content.date}
            content={articleContent}
          />
        );
      }),
    [filteredArticles, locale],
  );

  return (
    <InnerScreenLayout>
      <Button
        as={Link}
        variant="dark"
        className={styles.container__add}
        to={`/${locale}${AppRoute.CreateArticle}`}>
        {formatMessage({id: 'add.title'})}
        <PlusCircleFill className={styles.container__add__icon} />
      </Button>
      <Col>{renderArticles()}</Col>
    </InnerScreenLayout>
  );
};

export default ArticlesListingScreen;
