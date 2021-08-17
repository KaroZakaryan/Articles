import React, {
  useState,
  forwardRef,
  useCallback,
  useImperativeHandle,
} from 'react';
import {useIntl} from 'react-intl';
import {Button, Modal} from 'react-bootstrap';

import {IConfirmModalProps, IConfirmModalRef} from './types';

const ConfirmModal = forwardRef<IConfirmModalRef, IConfirmModalProps>(
  ({body, onSuccess}, ref) => {
    const {formatMessage} = useIntl();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    useImperativeHandle(ref, () => ({
      showModal: handleShow,
    }));

    const handleSuccess = useCallback(() => {
      setShow(false);
      onSuccess();
    }, [onSuccess]);

    return (
      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{formatMessage({id: 'confirmModal.title'})}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleSuccess}>
            {formatMessage({id: 'confirmModal.yes'})}
          </Button>
          <Button variant="primary" onClick={handleClose}>
            {formatMessage({id: 'confirmModal.no'})}
          </Button>
        </Modal.Footer>
      </Modal>
    );
  },
);

ConfirmModal.displayName = 'ConfirmModal';

export default ConfirmModal;
