import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Bad from './Bad';
import Good from './Good';

export default function App() {
  return (
    <>
      <ErrorBoundary>
        <Bad />
      </ErrorBoundary>
      <Good />
    </>
  );
}
