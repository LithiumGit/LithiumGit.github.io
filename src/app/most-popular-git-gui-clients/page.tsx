import { PopularGitClients } from '../../lib/constants/PopularGitClients';
import { IMetadataParams } from '../../lib/interfaces';
import { UiUtils } from '../../lib/utilities/UiUtils';
import '../styles/gitclients.scss';
import { Comparision } from './comparision';
import { Description } from './description';
import { GitClientItem } from './gitClientItem';

const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Git GUI Clients in 2026",
    "description": "A comparison of the top Git GUI desktop clients in 2026, including LithiumGit, GitKraken, Sourcetree, Fork, TortoiseGit, Tower, and GitHub Desktop.",
    "url": "https://lithiumgit.com/most-popular-git-gui-clients",
    "numberOfItems": 7,
    "itemListElement": PopularGitClients.list.map((client, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": client.name,
        "url": client.website,
        "description": client.description,
    })),
};

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args,"most-popular-git-gui-clients");
    data.title = "Best Git GUI Clients in 2026 | Top Git Desktop Apps Compared";
    data.description = "Compare the best Git GUI clients of 2026: LithiumGit, GitKraken, Sourcetree, Fork, TortoiseGit, Tower, and GitHub Desktop. Find the right Git desktop app for your workflow.";
    data.keywords = "best Git GUI clients 2026, top Git clients, Git desktop applications, LithiumGit vs GitKraken, free Git GUI, Git client comparison, Git GUI for Windows Mac Linux";
    data.openGraph!.title = "Best Git GUI Clients in 2026 | Top Git Desktop Apps Compared";
    data.openGraph!.description = "Compare the best Git GUI clients of 2026: LithiumGit, GitKraken, Sourcetree, Fork, TortoiseGit, Tower, and GitHub Desktop. Find the right one for your workflow.";
    (data as any).twitter = {
        ...(data as any).twitter,
        title: "Best Git GUI Clients in 2026 | Top Git Desktop Apps Compared",
        description: "Compare the top Git GUI clients of 2026 — LithiumGit, GitKraken, Sourcetree, Fork, TortoiseGit, Tower, and GitHub Desktop.",
    };
    return data;
}

export default function GitClients(){
    return <main className="git-clients">
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <div className="content bg-second-color">
            <h1>Top Git GUI Clients Compared 2026</h1>
            <p>Explore the top Git GUI tools of 2026, each tailored for various
                developer needs. From seamless integrations to intuitive interfaces,
                find the perfect Git client for your workflow.
            </p>
            <Description />
            <Comparision />
            <ul className="tool-list">
                {
                    PopularGitClients.list.map((client,i)=>(
                        <GitClientItem serial={i+1} title={`${client.name}`} description={client.description} iconWidth={client.iconWidth}
                        price={client.price} imageUrl={client.imageUrl} key={client.name} website={client.website}
                        keyFeatures={client.keyFeatures} firstReleaseYear={client.firstReleaseYear} />
                    ))
                }
            </ul>
        </div>
    </main>
}