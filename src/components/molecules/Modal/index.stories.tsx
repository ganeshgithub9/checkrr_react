import { Meta, StoryObj } from '@storybook/react';
import Modal from '.';
import SuccessGIF from '../../../assets/gifs/success.gif';
import MailSuccessItem from '../../molecules/MailSuccessItem';

const meta: Meta<typeof Modal> = {
  component: Modal
};

export default meta;
type Story = StoryObj<typeof Modal>;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  //width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
};

export const CandidatesModal: Story = {
  args: {
    children: (
      <MailSuccessItem
        boxProps={{
          sx: {
            ...style,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }
        }}
        imageProps={{
          src: SuccessGIF,
          alt: 'Success GIF'
        }}
        messageProps={{
          content: 'Pre-Adverse Action notice successfully sent'
        }}
      />
    ),
    open: true
  }
};

// export const HomeModal: Story = {
//   args: {}
// };
