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
      <head>        
        {/*  Google Tag Manager  */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YXVJHG2DH4"></script>        
        <script src='/analytics.js' />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://lithiumgit.com",
            "name": "LithiumGit",
            "description": "LithiumGit is a Git client or GUI application which provide a user friendly interface to perform git related functionalities graphically.",
            "creator": {
              "@type": "Person",
              "name": "Tulshi Chandra Das"
            }
            }) 
          }}
      />
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
