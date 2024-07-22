import '@mantine/core/styles.css'
import '@mantine/nprogress/styles.css'
import React from 'react'

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="h-full flex justify-center items-center relative">
      {children}
    </main>
  )
}
