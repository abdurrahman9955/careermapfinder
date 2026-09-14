import React from 'react';
import { DashboardLayoutWrapper } from './DashboardLayoutWrapper';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayoutWrapper>{children}</DashboardLayoutWrapper>;
}