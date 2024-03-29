import { URL } from '../../../constants';
import { handleResponse, createHeaders } from '../../utils';
import * as statsAT from './stats.action-types';

const baseUrl = `${URL}/statistics`;

const setCountStatsState = (data) => ({
  type: statsAT.SET_COUNT_STATS,
  payload: data,
});

const setProfitStatsState = (data) => ({
  type: statsAT.SET_PROFIT_STATS,
  payload: data,
});

const setTopBrandsStatsState = (data) => ({
  type: statsAT.SET_TOP_BRANDS_STATS,
  payload: data,
});

export const resetStatsState = () => ({
  type: statsAT.RESET_STATS,
});

const fetchCountStats = (endpoint) => (dispatch) => {
  fetch(baseUrl + endpoint, { headers: createHeaders() })
    .then((res) => handleResponse(res, dispatch))
    .then((res) => res.json())
    .then((data) => dispatch(setCountStatsState(data)))
    .catch(catchErrors);
};

const fetchProfitStats = (endpoint) => (dispatch) => {
  fetch(baseUrl + endpoint, { headers: createHeaders() })
    .then((res) => handleResponse(res, dispatch))
    .then((res) => res.json())
    .then((data) => dispatch(setProfitStatsState(data)))
    .catch(catchErrors);
};

const fetchTopBrandsStats = (endpoint) => (dispatch) => {
  fetch(baseUrl + endpoint, { headers: createHeaders() })
    .then((res) => handleResponse(res, dispatch))
    .then((res) => res.json())
    .then((data) => dispatch(setTopBrandsStatsState(data)))
    .catch(catchErrors);
};

export const fetchStats = () => (dispatch) => {
  dispatch(
    fetchCountStats(`/count/${365 - 31 + new Date(Date.now()).getDate()}`)
  );
  dispatch(
    fetchProfitStats(`/profit/${365 - 31 + new Date(Date.now()).getDate()}`)
  );
  dispatch(fetchTopBrandsStats('/topbrands'));
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
