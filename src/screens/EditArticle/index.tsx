import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Redirect, useParams} from 'react-router-dom';

import {AppRoute} from '~/constants';
import {editArticle} from '~/store/reducers/articles';
import {ArticleForm, InnerScreenLayout} from '~/components';
import {useArticles, useBackButton, useLocalizedHistory} from '~/hooks';

import styles from '../CreateArticle/CreateArticle.module.scss';

const EditArticleScreen: React.FC = () => {
  const dispatch = useDispatch();
  const {backPath} = useBackButton();
  const {articleId} = useParams<any>();
  const history = useLocalizedHistory();
  const {filteredArticles} = useArticles();
  const articleIndex = filteredArticles.findIndex(
    (article) => article.id === Number(articleId),
  );
  const article = filteredArticles[articleIndex];

  const handleEditFormSubmit = useCallback(
    (values) => {
      dispatch(
        editArticle({
          id: article?.id,
          content: values,
        }),
      );
      history.push(AppRoute.ArticlesListing);
    },
    [article?.id, dispatch, history],
  );

  if (!article) {
    return <Redirect to={backPath} />;
  }

  return (
    <InnerScreenLayout className={styles.container}>
      <ArticleForm
        initialValues={article.content}
        onSubmit={handleEditFormSubmit}
      />
    </InnerScreenLayout>
  );
};

export default EditArticleScreen;
