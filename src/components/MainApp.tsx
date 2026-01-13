'use client';

import React, { useState } from 'react';
import ChatInterface from './ChatInterface';
import RoleSelector from './RoleSelector';

export default function MainApp() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground antialiased font-sans">
      {!selectedRole ? (
        <RoleSelector onSelect={setSelectedRole} />
      ) : (
        <ChatInterface role={selectedRole} onBack={() => setSelectedRole(null)} />
      )}
    </div>
  );
}
