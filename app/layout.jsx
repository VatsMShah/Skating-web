import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CURBTRICK — Roller Skating Rink & Skatepark",
  description:
    "Roller skating rink and indoor skatepark built for concrete lines, street obstacles, vert ramps, and community sessions for every skater.",
  icons: {
    icon: "https://destined-weevil.10web.cloud/wp-content/uploads/2026/09/favicon-dark.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
