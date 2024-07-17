'use client'
import { useRedirect } from '@/hooks/useRedirect';

export default function DashboardRedirect() {
    useRedirect("./dashboard/home")

    return (
        <div>Loading...</div>
    )
}