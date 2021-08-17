import React, {useCallback, useRef} from 'react';
import {format} from 'date-fns';
import {useIntl} from 'react-intl';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Button, Card, Row} from 'react-bootstrap';
import {Trash, Pencil} from 'react-bootstrap-icons';

import {useLocalizedHistory} from '~/hooks';
import {removeArticle} from '~/store/reducers/articles';

import ConfirmModal from '../ConfirmModal';
import {IConfirmModalRef} from '../ConfirmModal/types';

import {IArticleCardProps} from './types';
import styles from './ArticleCard.module.scss';

const ArticleCard: React.FC<IArticleCardProps> = ({
  id,
  date,
  title,
  content,
}) => {
  const dispatch = useDispatch();
  const history = useLocalizedHistory();
  const {locale, formatMessage} = useIntl();
  const confirmModalRef = useRef<IConfirmModalRef | null>(null);

  const handleRemove = useCallback(() => {
    dispatch(
      removeArticle({
        id,
      }),
    );
  }, [dispatch, id]);

  const handleTrashClick = () => {
    confirmModalRef.current?.showModal();
  };

  const handlePencilClick = useCallback(() => {
    history.push(`/articles/edit/${id}`);
  }, [history, id]);

  return (
    <Card bg="light" className={styles.container}>
      <Card.Header
        className={`${styles.container__header} ${styles.container__text}`}>
        {title}
      </Card.Header>

      <Card.Body as={Link} to={`/${locale}/articles/${id}`}>
        <Card.Text
          className={styles.container__text}
          dangerouslySetInnerHTML={{__html: content}}
        />
      </Card.Body>

      <Card.Footer className="text-muted">
        {format(new Date(date), 'MMMM dd, yyyy')}
      </Card.Footer>

      <Row className={styles.container__actions}>
        <Button
          variant="danger"
          onClick={handleTrashClick}
          className={styles.container__actions__button}>
          <Trash />
        </Button>
        <Button
          onClick={handlePencilClick}
          className={styles.container__actions__button}>
          <Pencil />
        </Button>
      </Row>

      <ConfirmModal
        ref={confirmModalRef}
        body={formatMessage(
          {
            id: 'confirmModal.body',
          },
          {
            recordName: title.slice(0, 20).concat('...'),
          },
        )}
        onSuccess={handleRemove}
      />
    </Card>
  );
};

export default ArticleCard;
