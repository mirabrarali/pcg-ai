'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

interface RoleSelectorProps {
  onSelect: (role: string) => void;
}

export default function RoleSelector({ onSelect }: RoleSelectorProps) {
  const [hoveredRole, setHoveredRole] = useState<string | null>(null);

  const roles = [
    { name: 'Frontend Developer', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend Developer', icon: '⚙️', color: 'from-purple-500 to-pink-500' },
    { name: 'Infra Manager', icon: '🏗️', color: 'from-orange-500 to-red-500' },
    { name: 'HR', icon: '👥', color: 'from-green-500 to-emerald-500' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Bot className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2 text-white">PCG AI</h1>
          <p className="text-muted-foreground text-lg">Select Your Expert Consultant</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={role.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredRole(role.name)}
              onHoverEnd={() => setHoveredRole(null)}
            >
              <button
                onClick={() => onSelect(role.name)}
                className={`w-full p-6 rounded-xl border border-border transition-all duration-300 ${
                  hoveredRole === role.name
                    ? 'bg-gradient-to-br ' + role.color + ' border-transparent scale-105'
                    : 'bg-muted/30 hover:bg-muted/50'
                }`}
              >
                <div className="text-3xl mb-3">{role.icon}</div>
                <h3 className={`font-semibold text-lg ${
                  hoveredRole === role.name ? 'text-white' : 'text-foreground'
                }`}>
                  {role.name}
                </h3>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
