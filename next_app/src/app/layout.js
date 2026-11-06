import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata = {
  title: "thedev artist",
  description: "Dev Artist Tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <script dangerouslySetInnerHTML={{__html: `
          // Disable right click / inspect element
          document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
          });
          
          // Disable F12 and inspect key combinations
          document.addEventListener('keydown', function(e) {
            // F12
            if (e.keyCode === 123 || e.key === 'F12') {
              e.preventDefault();
              return false;
            }
            // Ctrl+Shift+I or Cmd+Opt+I, Ctrl+Shift+J or Cmd+Opt+J, Ctrl+Shift+C or Cmd+Opt+C
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && (
              e.keyCode === 73 || e.key === 'I' || e.key === 'i' ||
              e.keyCode === 74 || e.key === 'J' || e.key === 'j' ||
              e.keyCode === 67 || e.key === 'C' || e.key === 'c'
            )) {
              e.preventDefault();
              return false;
            }
            // Ctrl+U or Cmd+Opt+U (View Source)
            if ((e.ctrlKey || e.metaKey) && (e.keyCode === 85 || e.key === 'U' || e.key === 'u')) {
              e.preventDefault();
              return false;
            }
            // Ctrl+S or Cmd+S (Save Page)
            if ((e.ctrlKey || e.metaKey) && (e.keyCode === 83 || e.key === 'S' || e.key === 's')) {
              e.preventDefault();
              return false;
            }
          });
        `}} />
      </head>
      <body className={`${outfit.variable}`}>
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
