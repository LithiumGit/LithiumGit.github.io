import { Config } from '../../config';
import { PopularGitClients } from '../../lib/constants/PopularGitClients';
import { IMetadataParams } from '../../lib/interfaces';
import { UiUtils } from '../../lib/utilities/UiUtils';
import '../styles/gitclients.scss';
import { Comparision } from './comparision';
import { Description } from './description';
import { GitClientItem } from './gitClientItem';
import { FaqSection } from './faqSection';

const PAGE_URL = "https://lithiumgit.com/most-popular-git-gui-clients";
const DATE_PUBLISHED = "2025-01-01";
const DATE_MODIFIED = Config.PublishedDate;
const CURRENT_YEAR = new Date().getFullYear();

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `Best Git Desktop Applications in ${CURRENT_YEAR}`,
    "description": `A comparison of the best Git desktop applications in ${CURRENT_YEAR}, including LithiumGit, GitKraken, Sourcetree, Fork, TortoiseGit, Tower, and GitHub Desktop.`,
    "url": PAGE_URL,
    "numberOfItems": 7,
    "itemListElement": PopularGitClients.list.map((client, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": client.name,
        "url": client.website,
        "description": client.description,
    })),
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Best Git Desktop Applications in ${CURRENT_YEAR} | Top Git GUI Clients Compared`,
    "description": `Compare the best Git desktop applications and GUI clients of ${CURRENT_YEAR}: LithiumGit, GitKraken, Sourcetree, Fork, TortoiseGit, Tower, and GitHub Desktop. Find the right Git app for your workflow.`,
    "url": PAGE_URL,
    "datePublished": DATE_PUBLISHED,
    "dateModified": DATE_MODIFIED,
    "author": { "@type": "Organization", "name": "LithiumGit" },
    "publisher": { "@type": "Organization", "name": "LithiumGit", "url": "https://lithiumgit.com" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the best free Git desktop application?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "LithiumGit is the best free Git desktop application — it is 100% free, open-source, and works on Windows, Mac, and Linux with no registration required. GitHub Desktop and Sourcetree are also excellent free options."
            }
        },
        {
            "@type": "Question",
            "name": "What is the best Git GUI client for Windows?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "LithiumGit, Sourcetree, GitHub Desktop, and TortoiseGit are all top Git GUI clients for Windows. TortoiseGit is unique in offering Windows Explorer shell integration."
            }
        },
        {
            "@type": "Question",
            "name": "What is the best Git GUI client for Mac?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "LithiumGit, Tower, GitKraken, Fork, and Sourcetree are the best Git GUI clients for Mac. Tower is the most polished paid option; LithiumGit is the best free Mac Git client."
            }
        },
        {
            "@type": "Question",
            "name": "What is the best Git desktop application for Linux?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "LithiumGit and GitKraken are the best Git desktop applications with Linux support. LithiumGit is free and open-source; GitKraken offers a free tier for public repositories."
            }
        },
        {
            "@type": "Question",
            "name": "Do I need a Git GUI client or can I use the command line?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most developers use both. The command line is great for quick operations, but a Git GUI client like LithiumGit adds powerful visualizations for branch history, merge conflict resolution, and interactive staging — making complex Git operations much easier."
            }
        },
        {
            "@type": "Question",
            "name": "Which Git desktop application works with GitHub, GitLab, and Bitbucket?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "LithiumGit is origin-independent and works with any Git hosting platform including GitHub, GitLab, Bitbucket, Gerrit, and self-hosted Git servers. GitKraken, Sourcetree, Tower, and Fork also support all major platforms."
            }
        },
        {
            "@type": "Question",
            "name": "What is the best Git client for beginners?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "GitHub Desktop and LithiumGit are the most beginner-friendly Git desktop applications. Both offer simple, intuitive interfaces that eliminate the need for command-line knowledge."
            }
        }
    ]
};

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args,"most-popular-git-gui-clients");
    data.title = `Best Git Desktop Applications in ${CURRENT_YEAR} | Top Git GUI Clients Compared`;
    data.description = `Compare the best Git desktop applications of ${CURRENT_YEAR}: LithiumGit, GitKraken, Sourcetree, Fork, TortoiseGit, Tower, and GitHub Desktop. Find the right Git GUI client for Windows, Mac, or Linux.`;
    data.keywords = `best git desktop applications, best Git GUI clients ${CURRENT_YEAR}, top Git clients, Git desktop app, free Git GUI, Git GUI for Windows, Git GUI for Mac, Git GUI for Linux, LithiumGit vs GitKraken, Git client comparison ${CURRENT_YEAR}`;
    data.openGraph!.title = `Best Git Desktop Applications in ${CURRENT_YEAR} | Top Git GUI Clients Compared`;
    data.openGraph!.description = `Compare the best Git desktop applications of ${CURRENT_YEAR}: LithiumGit, GitKraken, Sourcetree, Fork, TortoiseGit, Tower, and GitHub Desktop. Find the right one for your workflow.`;
    (data as any).twitter = {
        ...(data as any).twitter,
        title: `Best Git Desktop Applications in ${CURRENT_YEAR} | Top Git GUI Clients Compared`,
        description: `Compare the top Git desktop applications of ${CURRENT_YEAR} — LithiumGit, GitKraken, Sourcetree, Fork, TortoiseGit, Tower, and GitHub Desktop.`,
    };
    return data;
}

export default function GitClients(){
    return <main className="git-clients">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <div className="content bg-second-color">
            <h1>Best Git Desktop Applications in {CURRENT_YEAR}: Top Git GUI Clients Compared</h1>
            <p>Looking for the <strong>best Git desktop application</strong> to streamline your workflow?
                Whether you are a beginner or an experienced developer, the right <strong>Git GUI client</strong> can
                transform how you manage branches, resolve merge conflicts, and visualize your project history —
                all without needing to memorize command-line syntax.
            </p>
            <p>We tested and ranked the <strong>top Git desktop apps of {CURRENT_YEAR}</strong> across Windows, Mac, and Linux
                to help you pick the one that best fits your workflow.
            </p>
            <Description />
            <Comparision />
            <ul className="tool-list">
                {
                    PopularGitClients.list.map((client,i)=>(
                        <GitClientItem
                            serial={i+1}
                            title={`${client.name}`}
                            description={client.description}
                            iconWidth={client.iconWidth}
                            price={client.price}
                            imageUrl={client.imageUrl}
                            key={client.name}
                            website={client.website}
                            keyFeatures={client.keyFeatures}
                            firstReleaseYear={client.firstReleaseYear}
                            bestFor={client.bestFor}
                            pros={client.pros}
                            cons={client.cons}
                            os={client.os}
                        />
                    ))
                }
            </ul>
            <FaqSection />
        </div>
    </main>
}