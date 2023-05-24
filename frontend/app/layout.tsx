import "../styles/globals.css";
import { Navbar } from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-primary text-primary-foreground">
      <head>
        <link rel="icon" href="/static/images/logo.ico" />
        <title>TixApp</title>
      </head>
      <Navbar />
      <div className="p-5 bg-primary text-primary-foreground">{children}</div>
    </html>
  );
}
