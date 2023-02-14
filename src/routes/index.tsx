import { Routes, Route, Navigate } from 'react-router-dom';
import { Register } from '../pages/register';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate replace to="/register" />} />
    </Routes>
  );
};
