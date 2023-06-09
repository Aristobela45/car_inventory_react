import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom';
import { Home, Dashboard, SignIn } from './components';
import { theme } from './Theme/themes';
import { ThemeProvider } from '@mui/material/styles';
import './styles.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        
        <Route path='/' element={<Home title={'Car Inventory'} />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/signin' element={<SignIn />}/>
      </Routes>
    </Router>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
