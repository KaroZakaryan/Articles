import React from 'react';
import {format} from 'date-fns';
import {useIntl} from 'react-intl';
import {Redirect, useParams} from 'react-router-dom';

import {useArticles, useBackButton} from '~/hooks';
import {DetailsPagination, InnerScreenLayout} from '~/components';

import styles from './ArticleDetails.module.scss';

const ArticleDetailsScreen: React.FC = () => {
  const {backPath} = useBackButton();
  const {articleId} = useParams<any>();
  const {filteredArticles} = useArticles();
  const {locale, formatMessage} = useIntl();
  const articleIndex = filteredArticles.findIndex(
    (article) => article.id === Number(articleId),
  );
  const article = filteredArticles[articleIndex];

  if (!article) {
    return <Redirect to={backPath} />;
  }

  const {title, content} = article.content[locale];

  const prevArticleId =
    articleIndex === 0 ? null : filteredArticles[articleIndex - 1].id;
  const nextArticleId =
    articleIndex === filteredArticles.length - 1
      ? null
      : filteredArticles[articleIndex + 1].id;

  return (
    <InnerScreenLayout className={styles.container}>
      {!prevArticleId && !nextArticleId ? null : (
        <DetailsPagination
          prevArticleId={prevArticleId}
          nextArticleId={nextArticleId}
        />
      )}
      <h1 className={styles.container__title}>{title}</h1>
      <blockquote className={`blockquote mb-0 ${styles.container__quote}`}>
        <p dangerouslySetInnerHTML={{__html: content}} />
        <footer
          className={`blockquote-footer ${styles.container__quote__footer}`}>
          {formatMessage({id: 'details.author'})}
          <cite title="article" className="mx-2">
            {format(new Date(article.content.date), 'MMMM dd, yyyy')}
          </cite>
        </footer>
      </blockquote>
    </InnerScreenLayout>
  );
};

export default ArticleDetailsScreen;
