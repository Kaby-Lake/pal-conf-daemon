import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Palworld Server Configuration',
  icons: "https://pal-conf.bluefissure.com/assets/favicon-orkAu1xw.ico"
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}