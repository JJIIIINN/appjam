/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        const eventFromAndroid = async (event: any) => {
            return event.detail.data;
        };

        window.addEventListener('javascriptFunction', eventFromAndroid);

        return () => {
            window.removeEventListener('javascriptFunction', eventFromAndroid);
        };
    }, []);

    return (
        <div>
            <div>승훈 화이팅~</div>
        </div>
    );
}

export default App;
