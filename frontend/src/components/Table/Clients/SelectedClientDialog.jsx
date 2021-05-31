import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { useState } from 'react';

import ClientDialogContent from './ClientDialogContent';

const SelectedClientDialog = ({ clientData, closeDialog }) => {
  const [client, setClient] = useState(clientData);

  const handleClose = () => {
    closeDialog();
  };

  const handleSave = (event) => {
    event.preventDefault();
    if (Object.values(client).some((e) => e === null || e === '')) {
      console.log('client data is not fully filled');
    } else {
      console.log(
        'check for changes, updated:',
        JSON.stringify(clientData) !== JSON.stringify(client)
      );

      // updateTicket(ticket);
      handleClose();
    }
  };

  return (
    <div>
      <Dialog
        maxWidth="sm"
        open={Object.keys(clientData).length > 0}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Dane klienta {client.idKlienta}
        </DialogTitle>
        <ClientDialogContent client={client} setClient={setClient} />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cofnij
          </Button>
          <Button onClick={handleSave} color="primary">
            Zapisz
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SelectedClientDialog;

SelectedClientDialog.propTypes = {
  clientData: PropTypes.object.isRequired,
  closeDialog: PropTypes.func.isRequired,
};