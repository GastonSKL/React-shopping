import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider } from 'react-query';

const cliente = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={cliente}>
    <React.StrictMode>
      <App /> 
    </React.StrictMode>
  </QueryClientProvider>
)
