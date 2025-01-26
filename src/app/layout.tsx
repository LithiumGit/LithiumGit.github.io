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
        <title>LithiumGit | The most powerful Git client application.</title>
        <meta name="description" content="Most popular Git client application. LithiumGit is a Git client or GUI application which provide a user friendly interface to perform git related functionalities graphically.LithiumGit is origin independent application. That means it can be used for any git project having any origin platform such as Github, GitLab, BitBucket,Gerrit or others. The most useful feature of LithiumGit which a user may find is the graph view. In graph view the overall state of change history can be viewed. From the graph view user can easily view the changes of any commit, do merge, rebase, cherry-pick, create branch and more other functionalities." />
        <meta name="keywords" content="LithiumGit,Git client,Git GUI, Desktop application,Cross platform Git client appliction,Cross platform Git GUI appliction"></meta>
        <meta property="og:title" content="LithiumGit | The most powerful Git client application." />
        <meta property="og:description" content="Most popular Git client application. LithiumGit is a Git client or GUI application which provide a user friendly interface to perform git related functionalities graphically." />
        <meta property="og:image" content="https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png" />
        <meta property="og:url" content="https://lithiumgit.github.io" />
        <meta property="og:type" content="website" />
        {/*  Google Tag Manager  */}        
        <script src='/analytics.js' />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://lithiumgit.github.io",
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
