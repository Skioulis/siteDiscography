// JavaScript
import { useEffect, useState } from 'react';

export default function Message() {
    const [message, setMessage] = useState('Loading...');

    useEffect(() => {
        let isMounted = true;

        async function fetchMessage() {
            try {
                const res = await fetch('http://localhost:3000/');
                const data = await res.json();
                console.log(data);
                if (isMounted) setMessage(data?.message ?? 'No message');
            } catch (e) {
                if (isMounted) setMessage('Failed to load message');
            }
        }

        fetchMessage();
        return () => {
            isMounted = false;
        };
    }, []);

    return <h1>{message}</h1>;
}