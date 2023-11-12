import "@/assets/scss/main.scss";
import Navbar from "@/components/common/header/Navbar";
import Footer from '@/components/common/footer/footer'
import { poppins, roboto, inter } from "@/fonts";

export const metadata = {
  title: "E-commerce",
  description: "Ecommerce App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${inter.variable}`}
    >
      <body suppressHydrationWarning={true}>
        <Navbar />
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
