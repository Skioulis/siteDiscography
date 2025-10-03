import { useEffect, useState } from 'react'

export default function Message() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        let isMounted = true;
        fetch("http://localhost:3000/")
            .then((res) => res.json())
            .then((data) => {
                if (isMounted) setMessage(data?.message ?? "");
            })
            .catch(() => {
                if (isMounted) setMessage("Failed to load message");
            });
        return () => {
            isMounted = false;
        };
    }, []);

    return <h1>{message}</h1>;
}