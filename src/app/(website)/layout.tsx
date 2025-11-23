import "../globals.css";
import Topbar from "@/components/website/Common/Topbar";
import Navbar from "@/components/website/Common/Navbar";
import Footer from "@/components/website/Common/Footer";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="T4DGC9bH_hNAw5kO34BDx8AcyBU9CcVjy3r0zFUnKgk"
        />
      </Head>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
