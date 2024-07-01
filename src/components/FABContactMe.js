// src/components/FloatingActionButton.js
import React from 'react';
import '../styles/FABContactMe.css';
import TelegramIcon from '@mui/icons-material/Telegram';

const FABContactMe = () => {
  const handleClick = () => {
    alert('Contact Me button clicked!');
    // Implement your logic here, e.g., show a contact form or navigate to a contact page
  };

  return (
    <button className="fab" onClick={handleClick}>
      <TelegramIcon/> Contact me
    </button>
  );
};

export default FABContactMe;
