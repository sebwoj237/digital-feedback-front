import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useRedirect(destination: string, delay: number = 0) {
    const router = useRouter();

    useEffect(() => {
        if (delay != -1) {
            initRedirect(delay)
        }
    }, [router])

    function initRedirect(_delay: number = 0) {
        setTimeout(()=>{
            router.push(destination)
        }, delay) 
    }

    return initRedirect
}