import Navbar from "./components/Navbar.js";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kitstagram",
  description: "Social Media for Cats",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
