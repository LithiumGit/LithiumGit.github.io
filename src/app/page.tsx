import { IMetadataParams } from '../lib/interfaces';
import { UiUtils } from '../lib/utilities/UiUtils';
import { PageChild } from './pageChild';
import './styles/home.scss';

const softwareAppSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "LithiumGit",
  "operatingSystem": "Windows, macOS, Linux",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://lithiumgit.com",
  "downloadUrl": "https://lithiumgit.com/download",
  "softwareVersion": "1.0.8",
  "description": "LithiumGit is a free, open-source, cross-platform Git GUI client for Windows, Mac, and Linux. It provides an interactive graph view, branch management, merge conflict resolution, and full Git workflow support without requiring command-line knowledge.",
  "screenshot": "https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png",
  "author": {
    "@type": "Person",
    "name": "Tulshi Chandra Das"
  },
  "license": "https://github.com/TulshiDas39/LithiumGit/blob/master/LICENSE"
};

export function generateMetadata(args:IMetadataParams){    
    const data = UiUtils.getCommonHeaderInfo(args,"");
    return data;
}

export default function Home() {  
  return (
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
        <PageChild />
      </main>
  );
}
