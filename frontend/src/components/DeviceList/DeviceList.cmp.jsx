import PropTypes from 'prop-types';
import React from 'react';
import withEnhancedTable from '../Table/EnhancedTable';
import DeviceTableRow from '../Table/Rows/DeviceTableRow';

const DeviceTable = withEnhancedTable(DeviceTableRow);

const headCells = [
  {
    id: 'id',
    label: 'ID',
  },
  {
    id: 'type',
    label: 'Rodzaj',
  },
  {
    id: 'brand',
    label: 'Firma',
  },

  {
    id: 'model',
    label: 'Model',
  },
];

function DeviceList({ devices }) {
  return (
    <DeviceTable headCells={headCells} data={devices} heading="Urządzenia" />
  );
}

export default DeviceList;

DeviceList.propTypes = {
  devices: PropTypes.array.isRequired,
};
