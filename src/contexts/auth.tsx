import { ReactNode, createContext, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

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

export interface Comment {
  id: string;
  comment: string;
}

export interface Image {
  id: string;
  image_url: string;
}

export interface Announcement {
  id: string;
  is_sale: boolean;
  title: string;
  year: string;
  mileage: string;
  price: string;
  description: string;
  is_car: boolean;
  is_published: boolean;
  comments: Comment[];
  images: Image[];
}

// type IUser = Omit<ISignInRequest, 'password' | 'address'> & { announcements: Announcement[] };

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
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('@motors:token');
    if (token) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      api
        .get('/profile')
        .then((response) => {
          setUser(response.data);
          navigate('/', { replace: true });
        })
        .catch((error) => {
          signOut();
        });
    }
  }, []);

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
      console.log(resp);
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

  return (
    <AuthContext.Provider value={{ login, user, setUser, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
