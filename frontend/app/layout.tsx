import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/static/images/logo.ico" />
        <title>TixApp</title>
      </head>
      <body>
        <Navbar />
        <div className="p-10">{children}</div>
      </body>
    </html>
  );
}
