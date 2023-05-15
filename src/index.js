import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tailwindcss/tailwind.css'
import Terms from './pages/terms';
import Vision from './pages/vision';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/terms" element={<Terms />}></Route>
      <Route path="/vision" element={<Vision />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

