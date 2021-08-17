export interface IDateControlProps {
  name: string;
  value: string;
  label: string;
  required?: boolean;
  placeholder: string;
  setFieldValue: (value: any) => void;
}
