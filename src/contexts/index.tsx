import { ReactNode } from 'react';
import { AnnouncementProvider } from './announcement';
import { AuthProvider } from './auth';
import MenuProvider from './menuContext';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <AnnouncementProvider>
        <MenuProvider>{children}</MenuProvider>
      </AnnouncementProvider>
    </AuthProvider>
  );
};
