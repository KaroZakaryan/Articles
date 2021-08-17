import {useMemo} from 'react';
import {useSelector} from 'react-redux';

import {IArticle} from '~/types';
import {selectArticles} from '~/store/reducers/articles';

interface IUseArticlesValue {
  articles: IArticle[];
  filteredArticles: IArticle[];
}

const useArticles = (): IUseArticlesValue => {
  const articles = useSelector(selectArticles);

  const filteredArticles = useMemo(
    () => articles.filter(({content}) => content.isActive),
    [articles],
  );

  return {
    articles,
    filteredArticles,
  };
};

export default useArticles;
