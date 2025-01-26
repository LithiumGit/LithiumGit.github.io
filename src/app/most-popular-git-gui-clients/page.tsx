import { PopularGitClients } from '../../lib/constants/PopularGitClients';
import '../styles/gitclients.scss';
import { Comparision } from './comparision';
import { GitClientItem } from './gitClientItem';

export default function GitClients(){
    return <main className="git-clients">
        <div className="content bg-second-color">
            <h1>Top 10 Git GUIs Compared 2025</h1>
            <p>Explore the top Git GUI tools of 2024, each tailored for various
                developer needs. From seamless integrations to intuitive interfaces,
                find the perfect Git client for your workflow.
            </p>
            <Comparision />
            <ul className="tool-list">
                {
                    PopularGitClients.list.map((client,i)=>(
                        <GitClientItem serial={i+1} title={`${client.name}`} description={client.description} 
                        price={client.price} imageUrl={client.imageUrl} key={client.name} />
                    ))
                }
            </ul>
        </div>
    </main>
}