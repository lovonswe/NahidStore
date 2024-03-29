import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import MapComponent from '../map/MyMap';
import { IconButton } from '@mui/material';
import { Cancel } from '@mui/icons-material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1100,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  maxHeight: '600px'
};

export default function AddressModal({ isModalOpen, setIsModalOpen }) {
  const handleClose = () => setIsModalOpen(false);
  const closeAddressModal = () => {
    console.log("closeAddressModal clicked.");
    return setIsModalOpen(false);
  }

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isModalOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      disableScrollLock // Prevents scrolling behind the modal
    >
      <Fade in={isModalOpen}>
        <Box sx={style}>
          <MapComponent />
        </Box>
      </Fade>
    </Modal>
  );
}
