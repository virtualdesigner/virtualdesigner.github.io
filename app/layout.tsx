import './globals.css'

export const metadata = {
  title: 'Deepak S M',
  description: 'Deepak\'s website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
