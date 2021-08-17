import {IDateControlProps} from '../DateControl/types';

export interface IFormFieldControlProps
  extends Omit<IDateControlProps, 'value'> {
  value: string;
  useTextArea?: boolean;
}
