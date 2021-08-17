import {createSelector, createSlice} from '@reduxjs/toolkit';

import {LocalizeStorage} from '~/utils';
import {IArticle, RootState} from '~/types';

const initialState: IArticle[] = LocalizeStorage.GET.Articles() || [];

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle(state, {payload}) {
      const previousStateId = state.length ? state[state.length - 1].id : 0;

      state.push({id: previousStateId + 1, content: payload});
      LocalizeStorage.SET.Articles(state);
    },
    removeArticle(state, {payload}) {
      const {id} = payload;
      const existingArticle = state.find((article) => article.id === id);

      if (existingArticle) {
        const filteredArticles = state.filter((article) => article.id !== id);

        LocalizeStorage.SET.Articles(filteredArticles);

        return filteredArticles;
      }
    },
    editArticle(state, {payload}) {
      const {id, content} = payload;
      const existingArticle = state.find((articles) => articles.id === id);

      if (existingArticle) {
        existingArticle.content = content;
        LocalizeStorage.SET.Articles(state);
      }
    },
  },
});

const {reducer, actions} = articlesSlice;

export const {addArticle, removeArticle, editArticle} = actions;

const selectArticlesState = (state: RootState) => state.articles;

export const selectArticles = createSelector(
  selectArticlesState,
  (articlesState) => articlesState,
);

export default reducer;
