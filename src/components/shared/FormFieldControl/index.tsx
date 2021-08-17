import React, {useCallback} from 'react';
import {Col, Form} from 'react-bootstrap';
import {Editor, OriginalTools} from 'react-bootstrap-editor';

import FormLabel from '../FormLabel';

import {IFormFieldControlProps} from './types';
import styles from './FormFieldControl.module.scss';

const FormFieldControl: React.FC<IFormFieldControlProps> = ({
  name,
  label,
  value,
  required,
  placeholder,
  setFieldValue,
  useTextArea,
}) => {
  const handleChange = useCallback(
    (changedValue) => {
      setFieldValue(useTextArea ? changedValue : changedValue.target.value);
    },
    [setFieldValue, useTextArea],
  );

  return (
    <Form.Group as={Col}>
      <FormLabel value={label} required={required} />

      {useTextArea ? (
        <Col className={styles.container__content}>
          <Editor value={value} tools={OriginalTools} onChange={handleChange} />
        </Col>
      ) : (
        <Form.Control
          required
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
      )}
    </Form.Group>
  );
};

export default FormFieldControl;
