import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/styles.scss";
import { StorageUtils } from '../lib';
import { Footer } from './components/footer';
import { Nav } from './components';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={StorageUtils.getTheme()}>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
