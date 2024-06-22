/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

function App() {
    const [tokenSt, setTokenSt] = useState<string>('');

    window.addEventListener('android', async (e: any) => {
        setTokenSt(e.token);
    });

    return (
        <div>
            <div>승훈 화이팅~</div>
            <div>{tokenSt}</div>
        </div>
    );
}

export default App;
