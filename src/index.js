import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './components/global';
import {AuthProvider} from "./hooks/AuthContext";
import {WindowProvider} from "./hooks/WindowContext";
import {PlayerProvider} from "./hooks/PlayerContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthProvider>
          <PlayerProvider>
          <WindowProvider>
              <App />
          </WindowProvider>
          </PlayerProvider>
      </AuthProvider>
  </React.StrictMode>
);
