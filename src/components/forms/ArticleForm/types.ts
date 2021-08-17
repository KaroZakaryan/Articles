export interface IArticleFormValues {
  title: string;
  content: string;
}

export interface IArticleFormProps {
  initialValues?: any;
  onSubmit: (values: any) => void;
}
