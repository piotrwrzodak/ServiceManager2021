import * as ticketsAT from './tickets.action-types';
import { URL } from '../../../constants';
import { logout } from '../../auth/auth.actions';

const baseUrl = `${URL}/tickets`;

const setTicketsState = (data) => ({
  type: ticketsAT.SET_TICKETS,
  payload: data,
});

const addTicketState = (ticket) => ({
  type: ticketsAT.ADD_TICKET,
  payload: ticket,
});

const updateTicketState = (ticket) => ({
  type: ticketsAT.UPDATE_TICKET,
  payload: ticket,
});

export const clientUpdateTicketState = (client) => ({
  type: ticketsAT.UPDATE_TICKET_PUT_CLIENT,
  payload: client,
});

const deleteTicketState = (id) => ({
  type: ticketsAT.DELETE_TICKET,
  payload: id,
});

// GET
export const fetchTickets = () => {
  return (dispatch) => {
    fetch(baseUrl)
      .then((res) => handleErrors(res, dispatch))
      .then((res) => res.json())
      .then((data) => dispatch(setTicketsState(data)))
      .catch((error) => console.log(error));
  };
};

// POST
export const postTicket = (data) => (dispatch) => {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      repairCost: parseFloat(data.repairCost),
      partsCost: parseFloat(data.partsCost),
      ...data,
    }),
  })
    .then((res) => handleErrors(res, dispatch))
    .then((res) => res.json())
    .then((ticket) => dispatch(addTicketState(ticket)))
    .catch(catchErrors);
};

// PUT
export const putTicket = (ticket) => (dispatch) => {
  fetch(baseUrl + `/${ticket.rma}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      repairCost: parseFloat(ticket.repairCost),
      partsCost: parseFloat(ticket.partsCost),
      ...ticket,
    }),
  })
    .then((res) => handleErrors(res, dispatch))
    .then(() => dispatch(updateTicketState(ticket)))
    .catch(catchErrors);
};

// DELETE
export const deleteTicket = (id) => (dispatch) => {
  fetch(baseUrl + '/' + id, { method: 'DELETE' })
    .then((res) => handleErrors(res, dispatch))
    .then(() => dispatch(deleteTicketState(id)))
    .catch(catchErrors);
};

const handleErrors = (response, dispatch) => {
  if (!response.ok) {
    if (response?.status === 401) {
      dispatch(logout());
    }

    throw response;
  }
  return response;
};

const catchErrors = (error) => {
  try {
    error
      .json()
      .then((body) =>
        console.log(
          `Server error: [${body.status} ${body.statusText ?? ''} ${
            body.detail ?? ''
          }]`
        )
      );
  } catch (error) {
    console.log(error);
  }
};
