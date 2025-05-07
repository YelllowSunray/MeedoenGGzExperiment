'use client';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Navbar = dynamic(() => import('./navbar'), {
  ssr: false,
  loading: () => (
    <nav style={{ 
      padding: '1rem',
      backgroundColor: '#00B4B4',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <span>Meedoen in Hilversum</span>
      <div>
        <span style={{ marginRight: '1rem' }}>Home</span>
        <span style={{ marginRight: '1rem' }}>Organisaties</span>
        <span>Feedback</span>
      </div>
    </nav>
  )
});

export default function NavbarWrapper() {
  return (
    <Suspense fallback={null}>
      <Navbar />
    </Suspense>
  );
} 