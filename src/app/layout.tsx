import Header from "@/components/fixedComponent/Header";
import "../styles/globals.css";
import Footer from "@/components/fixedComponent/Footer";
import Aside from "@/components/fixedComponent/Aside";
import { Playfair_Display } from 'next/font/google';
import QueryProvider from "@/components/tanstackQuery/QueryProvider";
import { ToastContainer } from "react-toastify";
import ContextProvider from "@/contexts/ContextProvider";

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});
export const metadata = {
  title: "Hestia",
  description: "candle e-commerce",
    icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body >
        <ContextProvider>
        <QueryProvider>
          <Header />
            <Aside />

            {children}
          <Footer />
          <ToastContainer />
        </QueryProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
