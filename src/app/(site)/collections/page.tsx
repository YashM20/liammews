// page.tsx
import React from 'react';
import RootLayout from '../layout';

export default function Collections() {
  return (
    <RootLayout pageName="Collections">
      <div className="py-5">
        <h1 className="text-red-500">Collections</h1>
      </div>
    </RootLayout>
  );
}