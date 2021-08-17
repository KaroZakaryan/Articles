import * as Yup from 'yup';

import {AppLanguage} from '~/constants/languages';
import {ArticleFormInputType, IArticleForm} from '~/types';

const schema = Yup.object().shape({
  title: Yup.string().required(),
  content: Yup.string().required(),
});

const schemas = Yup.object().shape(
  Object.values(AppLanguage).reduce((acc, curVal) => {
    acc[curVal] = schema;

    return acc;
  }, {} as any),
);

export const articleForm: IArticleForm = {
  schema,
  schemas,
  fields: [
    {
      name: 'title',
      required: true,
      usePlaceholder: true,
      type: ArticleFormInputType.Text,
    },
    {
      name: 'content',
      required: true,
      type: ArticleFormInputType.Textarea,
    },
  ],
};
