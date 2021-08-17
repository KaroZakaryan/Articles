import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import {AppRoute} from '~/constants';
import {useLocalizedHistory} from '~/hooks';
import {addArticle} from '~/store/reducers/articles';
import {ArticleForm, InnerScreenLayout} from '~/components';

import styles from './CreateArticle.module.scss';

const CreateArticleScreen: React.FC = () => {
  const dispatch = useDispatch();
  const history = useLocalizedHistory();

  const handleCreateFormSubmit = useCallback(
    (values) => {
      dispatch(addArticle(values));
      history.push(AppRoute.ArticlesListing);
    },
    [dispatch, history],
  );

  return (
    <InnerScreenLayout className={styles.container}>
      <ArticleForm onSubmit={handleCreateFormSubmit} />
    </InnerScreenLayout>
  );
};

export default CreateArticleScreen;
