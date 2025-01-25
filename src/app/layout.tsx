import { StorageUtils } from '../lib';
import { Footer } from './components/footer';
import { Nav } from './components';
import Script from 'next/script';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={StorageUtils.getTheme()}>
      <head>                
        {/*  Google Tag Manager  */}        
        <script src='https://github.com/LithiumGit/lithiumgit.github.io/releases/download/v1.0.0/analytics.js' />
        {/* End Google Tag Manager */}
      </head>
      
    <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KMSXQ326"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Nav />
        <div className='overflow-auto' style={{ height: 'calc(100% - 7rem)' }}>
          {children}
          <Footer />
        </div>
      </body>
    </html>    
  );
}
