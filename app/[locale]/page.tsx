'use client'
import { Hero } from '@/modules/public/Hero'
import { TopNavigation } from '@/modules/public/TopNavigation'
import { useRedirect } from '@/hooks/useRedirect'

export default function Home() {
  useRedirect("./auth/sign-in")

  return (
    <main className="">
      <TopNavigation />
      <Hero />
    </main>
  )
}
