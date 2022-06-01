import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(()=>{
    setDrawerOptions([
      {
        label: 'Página Inicial',
        path: '/home',
        icon: 'home'
      }
    ]);
  },[]);
  
  
  return (
    <Routes>
      <Route path="/home" element={ <Button variant='contained' color='primary' onClick={toggleDrawerOpen}>Toggle Drawer</Button>} />
            
      <Route path="*" element={<Navigate to="/home"/>}/>
    </Routes>
  );
};