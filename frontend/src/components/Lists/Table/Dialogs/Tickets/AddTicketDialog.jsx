import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postTicket } from '../../../../../store/data/tickets/tickets.actions';
import { useTicketDialogStyles } from '../styles';
import TicketDialogContent from './TicketDialogContent';

const initialTicket = {
  type: null,
  brand: null,
  model: null,
  partsCost: null,
  repairCost: null,
  glitch: null,
  information: null,
  name: null,
  surname: null,
  phoneNumber: null,
  eMail: null,
  status: null,
};

const AddTicketDialog = ({ addTicket }) => {
  const classes = useTicketDialogStyles();
  const [ticket, setTicket] = useState(initialTicket);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setTicket(initialTicket);
  };

  const handleAdd = (event) => {
    event.preventDefault();
    const { information, eMail, repairCost, status, ...dataToValidate } =
      ticket;
    if (
      Object.values(dataToValidate).some((e) => e === null || e?.trim() === '')
    ) {
      console.log('ticket is not fully filled');
    } else {
      if (ticket.repairCost === null) {
        ticket.status = 'created';
      } else {
        ticket.status = 'accepted';
      }
      addTicket(ticket);
      handleClose();
    }
  };

  return (
    <div>
      <Tooltip title="Nowe zlecenie">
        <IconButton aria-label="add" onClick={() => setOpen(true)}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Nowe zlecenie</DialogTitle>
        <TicketDialogContent
          classes={classes}
          ticket={ticket}
          setTicket={setTicket}
        />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cofnij
          </Button>
          <Button onClick={handleAdd} color="primary">
            Zapisz
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addTicket: (data) => dispatch(postTicket(data)),
});

export default connect(null, mapDispatchToProps)(AddTicketDialog);

AddTicketDialog.propTypes = {
  addTicket: PropTypes.func.isRequired,
};
