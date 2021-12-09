import * as devicesAT from './devices.action-types';

const initialState = {
  brands: [],
  models: [],
  error: false,
};

export default function devicesReducer(state = initialState, action) {
  switch (action.type) {
    case devicesAT.SET_DEVICE_MODELS: {
      return {
        ...state,
        models: action.payload,
      };
    }
    case devicesAT.SET_DEVICE_BRANDS: {
      return {
        ...state,
        brands: action.payload,
      };
    }
    case devicesAT.ADD_DEVICE: {
      return {
        models: [action.payload, ...state.models],
        brands: [
          { type: action.payload.type, brand: action.payload.brand },
          ...state.brands,
        ],
      };
    }
    case devicesAT.UPDATE_DEVICE: {
      return {
        ...state,
        models: state.models.map((device) =>
          device.idDevice === action.payload.idDevice ? action.payload : device
        ),
      };
    }
    case devicesAT.DELETE_DEVICE: {
      return {
        ...state,
        models: state.models.filter(
          (device) => device.idDevice !== action.payload
        ),
      };
    }
    case devicesAT.SET_DELETE_DEVICE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case devicesAT.UNSET_DELETE_DEVICE_ERROR: {
      return {
        ...state,
        error: false,
      };
    }
    default:
      return state;
  }
}
