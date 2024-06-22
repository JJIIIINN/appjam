import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '@/themes/globalStyle.ts';
import '@/themes/fonts.css';
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: true,
            refetchOnMount: true,
            staleTime: 60_000,
            retry: 0,
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Toaster />
            <App />
            <GlobalStyle />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>
);
