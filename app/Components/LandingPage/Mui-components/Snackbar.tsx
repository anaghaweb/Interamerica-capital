import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={10} ref={ref} variant="filled" {...props} />;
});

interface CustomSnackbarProps {
  open: boolean;
  message: string;
  severity: 'error' | 'warning' | 'info' | 'success';
  onClose: () => void;
}

const vertical = 'bottom';
const horizontal = 'center';

function CustomSnackbar({ open, message, severity, onClose }: CustomSnackbarProps) {
  return (
    <Snackbar
          open={open}
          autoHideDuration={10000}
          onClose={onClose}
          anchorOrigin={{ vertical, horizontal}}
          key={vertical + horizontal}
        
    >
      <Alert severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default CustomSnackbar;
