import Header from "@/components/fixedComponent/Header"
import Footer from "@/components/fixedComponent/Footer"
import "../styles/globals.css"
export const metadata = {
  title: 'Hestia',
  description: 'candle e-commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">

      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
