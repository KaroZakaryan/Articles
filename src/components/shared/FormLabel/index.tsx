import React from 'react';
import {Form} from 'react-bootstrap';
import {Asterisk as AsteriskIcon} from 'react-bootstrap-icons';

import {IFormLabelProps} from './types';
import styles from './FormLabel.module.scss';

const FormLabel: React.FC<IFormLabelProps> = ({value, required}) => (
  <Form.Label className={styles.container} column={false}>
    {value}:
    {required && (
      <AsteriskIcon
        fill="red"
        size={10}
        className={styles.container__asterisk}
      />
    )}
  </Form.Label>
);

export default FormLabel;
