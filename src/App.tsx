import { useEffect, useState } from 'react';

function App() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const globalWindow = window as any;
    const [tokenSt, setTokenSt] = useState<string>('');

    const test = (token) => {
        setTokenSt(token);
    };

    useEffect(() => {
        globalWindow.test = (token: string) => {
            setTokenSt(token);
        };
    }, []);

    return (
        <div>
            <div>승훈 화이팅~</div>
            <div>{tokenSt}</div>
        </div>
    );
}

export default App;
