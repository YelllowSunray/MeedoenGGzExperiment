'use client';

import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function ChatbotMessage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 20000);

    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: '100px',
        right: '20px',
        backgroundColor: 'white',
        padding: '12px 20px',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <Typography
        sx={{
          color: '#333',
          fontSize: '0.9rem',
          fontWeight: 500
        }}
      >
        Bekijk onze nieuwe chatbot, stel je vraag!
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10px',
          right: '20px',
          width: '0',
          height: '0',
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderTop: '10px solid white',
        }}
      />
    </Box>
  );
} 