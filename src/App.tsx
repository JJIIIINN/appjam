import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, SettingPage } from '@/pages';

function App() {
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
