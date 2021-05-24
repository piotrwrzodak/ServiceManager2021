import IconButton from '@material-ui/core/IconButton';
import { lighten, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import FilterListIcon from '@material-ui/icons/FilterList';
import clsx from 'clsx';
import React, { useState } from 'react';
import AddTicketDialog from './AddTicketDialog';

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    padding: `0 ${theme.spacing(1)}px`,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

export default function EnhancedTableToolbar({ searchInput, setSearchInput }) {
  const classes = useToolbarStyles();

  return (
    <Toolbar className={clsx(classes.root)}>
      <AddTicketDialog />
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Zlecenia
      </Typography>

      <TextField
        placeholder="Search"
        type="text"
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        // style={{ marginTop: 16, marginBottom: 8 }}
        size="small"
      />

      <Tooltip title="Filtrowanie">
        <IconButton aria-label="filter list">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}
