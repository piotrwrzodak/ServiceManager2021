import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { useStyles } from './useStyles';

function Settings() {
  const classes = useStyles();

  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    newPasswordRepeated: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(password);
  };

  return (
    <Paper className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography component="h3" variant="h4" className={classes.heading}>
          Ustawienia
        </Typography>
        <Typography
          component="h5"
          variant="h6"
          className={classes.form__heading}
        >
          Zmiana hasła
        </Typography>
        <TextField
          fullWidth
          label="Aktualne hasło"
          type="password"
          value={password.oldPassword}
          onChange={(event) =>
            setPassword({ ...password, oldPassword: event.target.value })
          }
          size="small"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Nowe hasło"
          type="password"
          value={password.newPassword}
          onChange={(event) =>
            setPassword({ ...password, newPassword: event.target.value })
          }
          size="small"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Powtórz nowe hasło"
          type="password"
          value={password.newPasswordRepeated}
          onChange={(event) =>
            setPassword({
              ...password,
              newPasswordRepeated: event.target.value,
            })
          }
          size="small"
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          style={{ marginTop: 26 }}
        >
          Zapisz
        </Button>
      </form>
    </Paper>
  );
}

export default Settings;
