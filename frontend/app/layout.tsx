import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Fragment } from "react";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "tixapp",
//   description: "nextjs ticket booking app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background text-brightmode">
      <head>
        <link rel="icon" href="/static/images/logo.ico" />
        <title>TixApp</title>
      </head>
      <Navbar />
      <div className="p-5">{children}</div>
    </html>
  );
}
