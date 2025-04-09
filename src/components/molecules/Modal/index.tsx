import { Modal, ModalProps, Stack } from '@mui/material';

const ModalComponent = (props: ModalProps) => {
  return (
    <div>
      <Modal {...props} component={'div'} style={{ width: '100%', height: '100%' }}>
        <Stack spacing={5}>{props.children}</Stack>
      </Modal>
    </div>
  );
};

export default ModalComponent;
