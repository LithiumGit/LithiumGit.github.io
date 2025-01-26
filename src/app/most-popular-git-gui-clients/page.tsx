import '../styles/gitclients.scss';
import { Comparision } from './comparision';

export default function GitClients(){
    return <main className="git-clients">
        <div className="content bg-second-color">
            <h1>Top 10 Git GUIs Compared 2025</h1>
            <p>Explore the top Git GUI tools of 2024, each tailored for various
        developer needs. From seamless integrations to intuitive interfaces,
        find the perfect Git client for your workflow.
      </p>
      <Comparision />
        </div>
    </main>
}