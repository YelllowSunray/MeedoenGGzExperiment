'use client';
import { CssBaseline } from '@mui/material';
import NavbarWrapper from './navbar/NavbarWrapper';
import Footer from './Footer';

export default function AppContent({ children }) {
  return (
    <>
      <CssBaseline />
      <NavbarWrapper />
      {children}
      <Footer />
    </>
  );
} 