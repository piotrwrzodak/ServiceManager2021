import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { selectEmployeesState } from '../../store/data/employees/employees.selectors';
import withEnhancedTable from './Table/EnhancedTable';
import EmployeeTableRow from './Table/Rows/EmployeeTableRow';

const EmployeeTable = withEnhancedTable(EmployeeTableRow);

const headCells = [
  {
    id: 'type',
    label: 'Rodzaj',
  },
  {
    id: 'name',
    label: 'Imie',
  },
  {
    id: 'surname',
    label: 'Nazwisko',
  },
  {
    id: 'phoneNumber',
    label: 'Nr telefonu',
    smUp: true,
  },
];

function EmployeeList({ employees }) {
  return (
    <EmployeeTable
      headCells={headCells}
      data={employees}
      heading="Pracownicy"
      view="employees"
    />
  );
}

const mapStateToProps = (state, ownProps) => ({
  employees: selectEmployeesState(state),
});

export default connect(mapStateToProps, null)(EmployeeList);

EmployeeList.propTypes = {
  employees: PropTypes.array.isRequired,
};
