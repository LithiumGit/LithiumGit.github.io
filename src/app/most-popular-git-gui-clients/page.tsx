import { PopularGitClients } from '../../lib/constants/PopularGitClients';
import { IMetadataParams } from '../../lib/interfaces';
import { UiUtils } from '../../lib/utilities/UiUtils';
import '../styles/gitclients.scss';
import { Comparision } from './comparision';
import { GitClientItem } from './gitClientItem';

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args,"download");
    data.title = "Most popular git clients at 2026.";
    data.description = "List of top git clients of 2026. Git client is a GUI application which provide a user friendly interface to perform git related functionalities graphically.";
    data.keywords = "Top Git clients,Best Git clients, 2026, Git GUI, Git Desktop application, Cross platform Git client applictions, Cross platform Git GUI applictions";
    data.openGraph!.title = "Most popular git clients at 2026.";
    return data;
}

export default function GitClients(){
    return <main className="git-clients">
        <div className="content bg-second-color">
            <h1>Top Git GUI Clients Compared 2026</h1>
            <p>Explore the top Git GUI tools of 2026, each tailored for various
                developer needs. From seamless integrations to intuitive interfaces,
                find the perfect Git client for your workflow.
            </p>
            <Comparision />
            <ul className="tool-list">
                {
                    PopularGitClients.list.map((client,i)=>(
                        <GitClientItem serial={i+1} title={`${client.name}`} description={client.description} 
                        price={client.price} imageUrl={client.imageUrl} key={client.name} website={client.website} />
                    ))
                }
            </ul>
        </div>
    </main>
}