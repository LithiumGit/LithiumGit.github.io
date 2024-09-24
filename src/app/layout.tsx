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
        <div className='overflow-auto' style={{height:'calc(100% - 7rem)'}}>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
