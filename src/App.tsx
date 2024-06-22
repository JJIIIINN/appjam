import { useEffect, useState } from 'react';

function App() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const globalWindow = window as any;
    const [tokenSt, setTokenSt] = useState<string>('');

    useEffect(() => {
        globalWindow.test = (token: string) => {
            setTokenSt(token);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <div>승훈 화이팅~</div>
            <div>{tokenSt}</div>
        </div>
    );
}

export default App;
