import { ReactNode, createContext, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { Announcement } from './announcement';

export interface EditProfile {
  name: string;
  email: string;
  cpf: string;
  cell: string;
  birthdate: string;
  description: string;
}
interface Address {
  cep: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement: string;
}

export interface ISignInRequest {
  name: string;
  email: string;
  cpf: string;
  cell: string;
  birthdate: string;
  description: string;
  password: string;
  is_buyer: boolean;
  address: Address;
}

export interface ILoginRequest {
  email: string;
  password: string;
}
export interface IUser extends Omit<ISignInRequest, 'password' | 'address'> {
  id: string;
  address: Address & { id: string };
  announcements: Announcement[];
}

interface AuthContextData {
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  login: (data: ILoginRequest) => Promise<void>;
  signIn: (data: ISignInRequest) => Promise<boolean>;
  signOut: () => void;
  reload: boolean;
  setReload: Dispatch<SetStateAction<boolean>>;
  editProfile: (data: EditProfile, userId: string) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<IUser | null>(null);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('@motors:token');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      api
        .get('/profile')
        .then((response) => {
          setUser(response.data);
          if (location.pathname == '/login' || location.pathname == '/register') {
            navigate(-1);
          } else {
            navigate(location.pathname, { replace: true });
          }
        })
        .catch((error) => {
          signOut();
        });
    }
  }, [reload]);

  const login = async (data: ILoginRequest) => {
    try {
      const resp = await api.post('/login', data);

      localStorage.setItem('@motors:token', resp.data.token);

      api.defaults.headers.common['Authorization'] = `Bearer ${resp.data.token}`;

      setUser(resp.data.user);

      navigate('/', { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = async (data: ISignInRequest) => {
    try {
      const resp = await api.post('/users', data);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const signOut = () => {
    setUser(null);
    localStorage.clear();
    navigate('/login', { replace: true });
  };

  const editProfile = async (data: EditProfile, userId: string) => {
    try {
      await api.patch(`/users/${userId}`, data);
      setReload((prevValue) => !prevValue);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ login, user, setUser, signIn, signOut, reload, setReload, editProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};
