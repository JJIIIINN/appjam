/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

function App() {
    const globalThis = window as any;

    useEffect(() => {
        globalThis.android.getToken(
            JSON.stringify({
                token: '토큰이야 토큰 토큰 토큰',
            })
        );
    }, []);

    return (
        <div>
            <div>승훈 화이팅~</div>
        </div>
    );
}

export default App;
