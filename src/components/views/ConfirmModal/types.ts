export interface IConfirmModalRef {
  showModal: () => void;
}

export interface IConfirmModalProps {
  body: string;
  onSuccess: () => void;
}
