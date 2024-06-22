/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, SettingPage } from '@/pages';

function App() {
    const globalThis = window as any;

    useEffect(() => {
        globalThis.android?.getToken(
            JSON.stringify({
                token: '토큰이야 토큰 토큰 토큰',
            })
        );
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/setting" element={<SettingPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
