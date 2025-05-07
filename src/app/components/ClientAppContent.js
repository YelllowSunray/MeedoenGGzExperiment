'use client';
import dynamic from 'next/dynamic';

const AppContent = dynamic(() => import('./AppContent'), {
  ssr: false
});

export default function ClientAppContent({ children }) {
  return <AppContent>{children}</AppContent>;
} 