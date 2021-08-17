import store from '~/store';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface IArticle {
  id: number;
  content: any;
}
