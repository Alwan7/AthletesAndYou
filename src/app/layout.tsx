export const metadata = {
  title: "Athletes & You — Demo",
  description: "A&Y demo aligned with deck: meeting place, marketing site, and trading place.",
};

import "./../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body">
        <Navbar />
        <main className="container-responsive">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
