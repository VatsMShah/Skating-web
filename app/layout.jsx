import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SkateIntroLoader from "@/components/SkateIntroLoader";

export const metadata = {
  title: "Dehiya Roller Skating Academy (D.R.S.A) — Excellence in Roller Skating",
  description:
    "Dehiya Roller Skating Academy (D.R.S.A) — 36 years of excellence in roller and inline skating coaching across Mumbai and Thane under Head Coaches Rajinder Singh Dehiya and Navjeet Singh Dehiya.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary selection:text-primary-foreground">
        <SkateIntroLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

