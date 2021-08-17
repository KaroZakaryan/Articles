import {SchemaOf} from 'yup';

export enum ArticleFormInputType {
  Text = 'text',
  Date = 'date',
  Textarea = 'textarea',
  Checkbox = 'checkbox',
}

interface IArticleSchema {
  title: string;
  content: string;
}

export type ArticleFormSchema = SchemaOf<IArticleSchema>;

interface IArticleFormField {
  name: string;
  required?: boolean;
  usePlaceholder?: boolean;
  type: ArticleFormInputType;
}

export interface IArticleForm {
  schema: ArticleFormSchema;
  schemas: ArticleFormSchema;
  fields: IArticleFormField[];
}
