import MainLayout from '@/components/MainLayout'
import './globals.css'


export const metadata = {
  title: 'Task Dashboard',
  description: 'This is Job Task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body><MainLayout>{children}</MainLayout></body>
    </html>
  )
}
