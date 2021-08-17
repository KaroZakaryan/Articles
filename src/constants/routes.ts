import {
  NoMatchScreen,
  EditArticleScreen,
  CreateArticleScreen,
  ArticleDetailsScreen,
  ArticlesListingScreen,
} from '~/screens';

export enum AppRoute {
  NoMatch = '*',
  Lang = '/:lang([a-zA-Z]{2})',
  ArticlesListing = '/articles',
  CreateArticle = '/articles/add',
  ArticleDetails = '/articles/:articleId',
  EditArticle = '/articles/edit/:articleId',
}

export const routes = [
  {
    path: AppRoute.ArticlesListing,
    Component: ArticlesListingScreen,
    localizedKey: 'listing',
  },
  {
    path: AppRoute.CreateArticle,
    Component: CreateArticleScreen,
    localizedKey: 'add',
  },
  {
    path: AppRoute.EditArticle,
    Component: EditArticleScreen,
    localizedKey: 'edit',
  },
  {
    path: AppRoute.ArticleDetails,
    Component: ArticleDetailsScreen,
    localizedKey: 'details',
  },
  {
    path: AppRoute.NoMatch,
    Component: NoMatchScreen,
    localizedKey: 'noMatch',
  },
];
