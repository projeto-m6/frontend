import { ReactNode } from "react";
import { AuthProvider } from "./auth";
import MenuProvider from "./menuContext";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <MenuProvider>{children}</MenuProvider>
    </AuthProvider>
  );
};
