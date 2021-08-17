import React, {useCallback, useMemo} from 'react';
import {format, parse} from 'date-fns';
import DatePicker from 'react-datepicker';
import {Col, Form} from 'react-bootstrap';

import FormLabel from '../FormLabel';

import {IDateControlProps} from './types';

const DateControl: React.FC<IDateControlProps> = ({
  name,
  label,
  value,
  required,
  placeholder,
  setFieldValue,
}) => {
  const selectedValue = useMemo(
    () => parse(value, 'MM/dd/yyyy', new Date()),
    [value],
  );

  const handleChange = useCallback(
    (date) => {
      setFieldValue(format(date, 'MM/dd/yyyy'));
    },
    [setFieldValue],
  );

  return (
    <Form.Group as={Col}>
      <FormLabel value={label} required={required} />

      <Form.Control
        name={name}
        as={DatePicker}
        onChange={handleChange}
        selected={selectedValue}
        placeholderText={placeholder}
      />
    </Form.Group>
  );
};

export default DateControl;
