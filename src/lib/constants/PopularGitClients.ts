import { IGitClientItem } from "../interfaces";

export class PopularGitClients{
    static readonly list:IGitClientItem[]=[
        {
            name:"GitKraken",
            description:"GitKraken Desktop is a cross-platform Git client that makes Git faster, easier, and more powerful. Known for its beautiful visuals, intuitive UI, and built-in integrations like Jira and Trello, GitKraken is ideal for teams. It includes features like drag-and-drop functionality, multiple profile management, predictive merge conflict alerts, and a built-in CLI. With tools for both beginners and advanced users, GitKraken is a top choice for Git GUIs.",
            price:"Free on public repos, Pro $4.95 per user, Teams $8.95 per user, Enterprise $18.95 per user",
            os:"Windows, Mac, & Linux",
            imageUrl:"https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/05/GitKraken-logo.webp",
        },
        {
            name:"Sourcetree",
            description:"Sourcetree is a free Git client with a simple interface, ideal for beginners. Its integration with Atlassian tools like Jira makes it a solid choice for teams already using the Atlassian ecosystem. It offers a clear visualization of repositories and simplifies complex Git commands for easier use.",
            price:"Free",
            os:"Windows, Mac",
            imageUrl:"https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/sourceTree.png",
        },
        {
            name:"Fork",
            description:"Fork is a fast and powerful Git client featuring an excellent diff viewer, dark mode, and a customizable UI. It's suitable for developers looking for a lightweight yet feature-rich Git GUI. Its clean design ensures an efficient workflow.",
            price:"Free",
            os:"Windows, Mac",
            imageUrl:"https://git-fork.com/images/logo5.png",
        },
        {
            name:"Tower",
            description:"Tower is a premium Git client offering advanced features like drag-and-drop, an interactive rebase tool, and an advanced search system. Its polished interface is ideal for professional developers and teams looking for high productivity.",
            price:"Paid",
            os:"Mac, Windows",
            imageUrl:"https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/tower.PNG",
        },
        {
            name:"GitHub Desktop",
            description:"GitHub Desktop offers seamless integration with GitHub, making it a great choice for developers working on GitHub repositories. Its beginner-friendly interface and streamlined workflow tools make Git operations simple and efficient.",
            price:"Free",
            os:"Windows, Mac",
            imageUrl:"https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/githubDesktop.jpg"
        }
        
];
}