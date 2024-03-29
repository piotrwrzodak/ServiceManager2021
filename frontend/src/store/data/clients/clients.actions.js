import { URL } from '../../../constants';
import { setAlert } from '../../alerts/alerts.actions';
import { handleResponse, createHeaders } from '../../utils';
import { clientUpdateTicketState } from '../tickets/tickets.actions';
import * as clientsAT from './clients.action-types';

const baseUrl = `${URL}/clients`;

const setClientsState = (data) => ({
  type: clientsAT.SET_CLIENTS,
  payload: data,
});

const addClientState = (client) => ({
  type: clientsAT.ADD_CLIENT,
  payload: client,
});

const updateClientState = (client) => ({
  type: clientsAT.UPDATE_CLIENT,
  payload: client,
});

const deleteClientState = (id) => ({
  type: clientsAT.DELETE_CLIENT,
  payload: id,
});

export const resetClientsState = () => ({
  type: clientsAT.RESET_CLIENTS,
});

// GET
export const fetchClients = () => {
  return (dispatch) => {
    fetch(baseUrl, {
      headers: createHeaders(),
    })
      .then((res) => handleResponse(res, dispatch))
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          setClientsState(data.map(({ rmas, ...keepAttrs }) => keepAttrs))
        );
      })
      .catch((error) => console.log(error));
  };
};

// POST
export const postClient = (client) => (dispatch) => {
  fetch(baseUrl, {
    method: 'POST',
    headers: createHeaders(),
    body: JSON.stringify(client),
  })
    .then((res) => handleResponse(res, dispatch))
    .then((res) => res.json())
    .then((client) => dispatch(addClientState(client)))
    .catch(catchErrors);
};

// PUT
export const putClient = (client) => (dispatch) => {
  fetch(baseUrl + `/${client.idClient}`, {
    method: 'PUT',
    headers: createHeaders(),
    body: JSON.stringify(client),
  })
    .then((res) => handleResponse(res, dispatch))
    .then((res) => res.json())
    .then((data) => {
      dispatch(updateClientState(client));
      dispatch(clientUpdateTicketState(client));
    })
    .catch(catchErrors);
};

// DELETE
export const deleteClient = (id) => (dispatch) =>
  fetch(baseUrl + '/' + id, {
    method: 'DELETE',
    headers: createHeaders(),
  })
    .then((res) => handleResponse(res, dispatch))
    .then(() => dispatch(deleteClientState(id)))
    .catch((error) =>
      error.json().then((response) => {
        if (response.detail === 'Nie usunięto zleceń klienta')
          dispatch(setAlert(response.detail));
      })
    );

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
