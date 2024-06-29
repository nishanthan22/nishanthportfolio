import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import TelegramIcon from '@mui/icons-material/Telegram';
import '../styles/FABContactMe.css';

export default function FABContactMe() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab className="fab" variant="extended"  color="primary">
        <TelegramIcon sx={{ mr: 1 }} />
        Contact me
      </Fab>
    </Box>
  );
}
