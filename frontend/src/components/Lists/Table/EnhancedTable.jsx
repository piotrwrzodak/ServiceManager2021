import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SelectedClientDialog from './Dialogs/Clients/SelectedClientDialog';
import SelectedDeviceDialog from './Dialogs/Devices/SelectedDeviceDialog';
import SelectedEmployeeDialog from './Dialogs/Employees/SelectedEmployeeDialog';
import SelectedTicketDialog from './Dialogs/Tickets/SelectedTicketDialog';
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import { useFilter } from './filtering';
import DeleteErrorSnackbar from './SnackBar';
import { getComparator, stableSort } from './sorting';
import { useTableStyles } from './styles';

const withEnhancedTable =
  (EnhancedRow) =>
  ({ data, headCells, heading }) => {
    const location = useLocation();
    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('undefined');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);
    const [searchInput, setSearchInput] = useState('');
    const [selectedRowData, setSelectedRowData] = useState(null);
    const filteredData = useFilter(data, searchInput);
    const classes = useTableStyles();

    const handleRequestSort = (_, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

    const handleClick = (_, row) => {
      setSelectedRowData(row);
    };

    const handleChangePage = (_, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const handleCloseDialog = () => setSelectedRowData(null);

    // const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <>
        {location.pathname === '/clients' && <DeleteErrorSnackbar />}

        {selectedRowData &&
          (location.pathname === '/tickets' || location.pathname === '/') && (
            <SelectedTicketDialog
              ticketData={selectedRowData}
              closeDialog={handleCloseDialog}
            />
          )}
        {selectedRowData && location.pathname === '/employees' && (
          <SelectedEmployeeDialog
            employeeData={selectedRowData}
            closeDialog={handleCloseDialog}
          />
        )}
        {selectedRowData && location.pathname === '/clients' && (
          <SelectedClientDialog
            clientData={selectedRowData}
            closeDialog={handleCloseDialog}
          />
        )}
        {selectedRowData && location.pathname === '/devices' && (
          <SelectedDeviceDialog
            deviceData={selectedRowData}
            closeDialog={handleCloseDialog}
          />
        )}
        <Paper className={classes.root}>
          <EnhancedTableToolbar
            heading={heading}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
          <TableContainer className={classes.container}>
            <Table
              aria-labelledby="tableTitle"
              aria-label="enhanced table"
              className={classes.table}
              stickyHeader
            >
              <EnhancedTableHead
                headCells={headCells}
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                rowCount={filteredData.length}
              />
              <TableBody>
                {stableSort(filteredData, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <EnhancedRow
                        key={row.rma ?? row.id ?? row.idKlienta}
                        row={row}
                        classes={classes}
                        handleClick={handleClick}
                      />
                    );
                  })}
                {!filteredData && (
                  <TableRow style={{ height: '100%' }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[25, 50, 100]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            size="small"
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            labelRowsPerPage=""
            nextIconButtonText="Następna strona"
          />
        </Paper>
      </>
    );
  };

export default withEnhancedTable;