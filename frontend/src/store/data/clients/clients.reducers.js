import * as clientsAT from './clients.action-types';

const initialState = {
  clients: [],
};

export default function clientsReducer(state = initialState, action) {
  switch (action.type) {
    case clientsAT.SET_CLIENTS: {
      return {
        ...state,
        clients: action.payload,
      };
    }
    case clientsAT.ADD_CLIENT: {
      return {
        ...state,
        clients: [action.payload, ...state.clients],
      };
    }
    case clientsAT.UPDATE_CLIENT: {
      return {
        ...state,
        clients: state.clients.map((client) =>
          client.idClient === action.payload.idClient ? action.payload : client
        ),
      };
    }
    case clientsAT.DELETE_CLIENT: {
      return {
        ...state,
        clients: state.clients.filter(
          (client) => client.idClient !== action.payload
        ),
      };
    }
    case clientsAT.RESET_CLIENTS: {
      return initialState;
    }
    default:
      return state;
  }
}
