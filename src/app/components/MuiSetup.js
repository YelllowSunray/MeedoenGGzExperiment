'use client';
import { CssBaseline } from '@mui/material';

export default function MuiSetup({ children }) {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
} 