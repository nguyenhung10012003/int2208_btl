import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/global';
import {AuthProvider} from "./hooks/AuthContext";
import {WindowProvider} from "./hooks/WindowContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthProvider>
          <WindowProvider>
              <App />
          </WindowProvider>
      </AuthProvider>
  </React.StrictMode>
);
