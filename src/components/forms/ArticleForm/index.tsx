import React, {useCallback} from 'react';
import {Formik} from 'formik';
import {format} from 'date-fns';
import {useIntl} from 'react-intl';
import {Alert, Row, Form, Col, Button} from 'react-bootstrap';

import {ArticleFormInputType} from '~/types';
import {LocalizedTabsLayout} from '~/components';
import {AppLanguage, articleForm} from '~/constants';

import {FormFieldControl, DateControl} from '../../shared';

import styles from './ArticleForm.module.scss';
import {IArticleFormProps, IArticleFormValues} from './types';

const ArticleForm: React.FC<IArticleFormProps> = ({
  onSubmit,
  initialValues,
}) => {
  const {formatMessage} = useIntl();
  const localInitialValues = Object.values(AppLanguage).reduce(
    (acc, curVal) => {
      acc[curVal] = {
        title: initialValues ? initialValues[curVal].title : '',
        content: initialValues ? initialValues[curVal].content : '',
      };

      return acc;
    },
    {} as Record<AppLanguage, IArticleFormValues>,
  );

  const renderField = useCallback(
    ({
      type,
      name,
      values,
      formName,
      required,
      setFieldValue,
      usePlaceholder,
    }) => {
      const label = formatMessage({id: `add.form.label.${name}`});
      const placeholder =
        usePlaceholder &&
        formatMessage({
          id: `add.form.placeholder.${name}`,
        });
      const commonFieldProps = {
        name,
        label,
        value: values[name],
        setFieldValue: (updatedValue: string) =>
          setFieldValue(formName, {
            ...values,
            [name]: updatedValue,
          }),
      };
      const commonProps = {
        required,
        key: name,
        placeholder,

        ...commonFieldProps,
      };

      switch (type) {
        case ArticleFormInputType.Text: {
          return <FormFieldControl {...commonProps} />;
        }

        default: {
          return <FormFieldControl {...commonProps} useTextArea />;
        }
      }
    },
    [formatMessage],
  );

  const renderFields = useCallback(
    (args) =>
      articleForm.fields.map((fieldItem) => (
        <Row key={fieldItem.name} className="mb-4">
          {renderField({...fieldItem, ...args})}
        </Row>
      )),
    [renderField],
  );

  const renderLocalizedForms = useCallback(
    ({setFieldValue, values}) =>
      Object.values(AppLanguage).map((lang) =>
        renderFields({
          setFieldValue,
          formName: lang,
          values: values[lang],
        }),
      ),
    [renderFields],
  );

  return (
    <Formik
      onSubmit={onSubmit}
      validationSchema={articleForm.schemas}
      initialValues={{
        isActive: initialValues ? initialValues.isActive : '',
        date: initialValues
          ? initialValues.date
          : format(new Date(), 'MM/dd/yyyy'),
        ...localInitialValues,
      }}>
      {({
        handleSubmit,
        values,
        isValid,
        dirty,
        handleChange,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit} className={styles.container}>
          <LocalizedTabsLayout>
            {renderLocalizedForms({
              values,
              setFieldValue,
            })}
          </LocalizedTabsLayout>
          <DateControl
            name="date"
            value={values.date}
            setFieldValue={(value) =>
              handleChange({
                target: {
                  name: 'date',
                  value,
                },
              })
            }
            label={formatMessage({id: 'add.form.label.date'})}
            placeholder={formatMessage({id: 'add.form.placeholder.date'})}
          />

          <Row>
            <Form.Group className="mt-4" as={Col}>
              <Form.Check
                name="isActive"
                onChange={handleChange}
                value={values.isActive}
                checked={values.isActive}
                label={formatMessage({id: 'add.form.label.isActive'})}
              />
            </Form.Group>
            <Col className="mt-4">
              <Alert variant="danger" className="mb-md-4">
                {formatMessage({id: 'add.form.warning'})}
              </Alert>
              <Button
                type="submit"
                variant="outline-light"
                disabled={!(isValid && dirty)}
                className={styles.container__submit}>
                {formatMessage({id: 'add.form.submit'})}
              </Button>
            </Col>
          </Row>
        </form>
      )}
    </Formik>
  );
};

export default ArticleForm;
