import "../styles/globals.css";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background text-foreground">
      <head>
        <link rel="icon" href="/static/images/logo.ico" />
        <title>TixApp</title>
      </head>
      <Navbar />
      <div className="p-5 bg-background text-foreground">{children}</div>
    </html>
  );
}
