import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import { Login } from '../pages/login';
import { MyAds } from '../pages/myAds';
import { Register } from '../pages/register';

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/myAds" element={<MyAds />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};
