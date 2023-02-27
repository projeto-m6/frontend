import { ReactNode } from 'react';
import { AnnouncementProvider } from './announcement';
import { AuthProvider } from './auth';
import { CommentProvider } from './comment';
import MenuProvider from './menuContext';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <AnnouncementProvider>
        <CommentProvider>
          <MenuProvider>{children}</MenuProvider>
        </CommentProvider>
      </AnnouncementProvider>
    </AuthProvider>
  );
};
