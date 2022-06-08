import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard, ListagemDePessoas } from '../pages';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: 'Página Inicial',
        path: '/home',
        icon: 'home',
      },
      {
        label: 'pessoas',
        path: '/pessoas',
        icon: 'account_circle',
      },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Dashboard />} />
      <Route path="/pessoas" element={<ListagemDePessoas />} />
      {/* <Route path="/cidades/detalhe/:id" element={<Dashboard />} /> */}

      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
