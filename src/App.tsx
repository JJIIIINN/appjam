import { useState } from 'react';

function App() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const globalWindow = window as any;
    const [tokenSt, setTokenSt] = useState<string>('');

    globalWindow.test = (token: string) => {
        setTokenSt(token);
    };

    return <div>{tokenSt}</div>;
}

export default App;
