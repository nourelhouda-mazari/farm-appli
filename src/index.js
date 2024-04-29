import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import React from 'react';
import { Suspense } from 'react';
import './i18n';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
      <Suspense fallback={<div>Loading....</div>}>
          <App />
      </Suspense>
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);