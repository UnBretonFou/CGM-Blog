import Header from './components/header';
import './globals.css';

export default function RootLayout({children}: 
  Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="p-4 bg-red-700">{children}</div>
        
      </body>
    </html>
  );
}
