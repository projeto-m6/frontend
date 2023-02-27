import { createContext, ReactNode, useContext } from 'react';
import api from '../services/api';
import { AuthContext } from './auth';

export interface ICommentRequest {
  comment: string;
}

interface CommentContextData {
  createComment: (data: ICommentRequest, announcementId: string) => Promise<void>;
}

const CommentContext = createContext({} as CommentContextData);

interface CommentProviderProps {
  children: ReactNode;
}

export const CommentProvider = ({ children }: CommentProviderProps) => {
  const { setReload } = useContext(AuthContext);

  const createComment = async (data: ICommentRequest, announcementId: string) => {
    try {
      await api.post(`announcements/${announcementId}/comment`, data);
      setReload((prevValue) => !prevValue);
    } catch (error) {
      console.error(error);
    }
  };

  return <CommentContext.Provider value={{ createComment }}>{children}</CommentContext.Provider>;
};
