import { Alert, Snackbar as MuiSnackbar } from "@mui/material";

interface ISnackbar {
  open: boolean;
  message: string;
  severity: ESeverity;
  closeSnackbar: () => void;
}

export enum ESeverity {
  ERROR = "error",
  WARNING = "warning",
  INFO = "info",
  SUCCESS = "success",
}

function Snackbar({ open, message, severity, closeSnackbar }: ISnackbar) {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    console.log(event);
    closeSnackbar();
  };

  return (
    <MuiSnackbar
      open={open}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
}

export default Snackbar;
