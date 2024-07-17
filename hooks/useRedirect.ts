import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useRedirect(destination: string, delay: number = 0) {
    const router = useRouter();

    useEffect(() => {
        setTimeout(()=>{
            router.push(destination)
        }, delay) 
    }, [router])
}