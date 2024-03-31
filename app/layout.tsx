import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

export const metadata: Metadata = {
  title: 'Dashboard UI',
  description: 'Dashboard UI template',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-start justify-start">
          <Sidebar />
          <div className="h-full w-full">
            <Navbar />
            <div className="h-full max-w-7xl bg-[#fff] pb-6 lg:bg-[#F5F7FA]">{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}
