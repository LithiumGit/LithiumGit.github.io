import { IGitClientItem } from "../interfaces";

export class PopularGitClients{
    static readonly list:IGitClientItem[]=[
        {
            name:"LithiumGit",
            description:"Most powerful Git client application. LithiumGit is a Git client or GUI application which provide a user friendly interface to perform git related functionalities graphically.LithiumGit is origin independent application. That means it can be used for any git project having any origin platform such as Github, GitLab, BitBucket,Gerrit or others. The most useful feature of LithiumGit which a user may find is the graph view. In graph view the overall state of change history can be viewed. From the graph view user can easily view the changes of any commit, do merge, rebase, cherry-pick, create branch and more other functionalities",
            os:"Windows, Mac, & Linux",
            price:"Free",
            imageUrl:"https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png",
            website:"https://lithiumgit.com",
            keyFeatures: [
                "Interactive graph view for visualizing commit history",
                "Origin independent - works with GitHub, GitLab, BitBucket, Gerrit",
                "User-friendly graphical interface for all Git operations",
                "Merge, rebase, and cherry-pick from graph view",
                "Branch management and visualization",
                "Cross-platform support (Windows, Mac, Linux)"
            ]
        },
        {
            name:"GitKraken",
            description:"GitKraken Desktop is a premium cross-platform Git GUI client that simplifies version control for developers and teams on Windows, Mac, and Linux. This powerful Git management tool features AI-assisted workflows, GitKraken Insights for engineering intelligence, and comprehensive DORA metrics tracking. With its stunning visual interface, GitKraken offers intuitive drag-and-drop commit management, cherry-picking, squashing, and interactive rebase capabilities. Built-in integrations with GitHub, GitLab, Bitbucket, Jira, and Trello make it perfect for agile development teams. Advanced features include predictive merge conflict detection and resolution, Git LFS support, GitFlow automation, submodules management, and real-time collaboration tools. GitKraken includes GitLens for VS Code IDE integration and GitKraken CLI for terminal users, providing a complete DevEx platform with AI-powered code insights, developer productivity analytics, and comprehensive Git learning resources. Ideal for solo developers and enterprise teams seeking enhanced Git workflow efficiency.",
            price:"Free on public repos, Pro $4.95 per user, Teams $8.95 per user, Enterprise $18.95 per user",
            os:"Windows, Mac, & Linux",
            imageUrl:"https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/05/GitKraken-logo.webp",
            website:"https://www.gitkraken.com",
            keyFeatures: [
                "AI-assisted workflows and GitKraken Insights with DORA metrics",
                "Beautiful visual interface with drag-and-drop operations",
                "Integrations with GitHub, GitLab, Bitbucket, Jira, and Trello",
                "Predictive merge conflict detection and resolution",
                "GitLens for VS Code and GitKraken CLI included",
                "Interactive rebase, Git-flow, and LFS support",
                "Real-time collaboration and team productivity analytics"
            ]
        },
        {
            name:"Sourcetree",
            description:"Sourcetree is a completely free Git and Mercurial desktop client for Windows and Mac, developed by Atlassian. This beginner-friendly Git GUI simplifies distributed version control with an intuitive visual interface that eliminates the need for command-line Git knowledge. Sourcetree offers comprehensive features including detailed branching diagrams for team progress tracking, Git-flow workflow support out of the box, Git Large File Support (LFS) for managing large assets, interactive rebase for clean commit history, submodules and subtree management, and local commit search functionality. The application provides excellent visualization of code changes with file, hunk, or line-level staging and unstaging capabilities. Seamlessly integrated with Bitbucket, GitHub, GitLab, and Atlassian's ecosystem (Jira, Confluence, Bamboo), Sourcetree is perfect for development teams seeking a free, powerful Git client. Additional features include remote repository management, cherry-picking, stashing, merge conflict resolution tools, and comprehensive Git status monitoring. Sourcetree Enterprise edition offers centralized deployment and management for large organizations.",
            price:"Free",
            os:"Windows, Mac",
            imageUrl:"https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/sourceTree.png",
            website:"https://www.sourcetreeapp.com",
            keyFeatures: [
                "Completely free for Git and Mercurial repositories",
                "Git-flow workflow support out of the box",
                "Git Large File Support (LFS) for big assets",
                "Interactive rebase and local commit search",
                "File, hunk, or line-level staging capabilities",
                "Seamless Atlassian integration (Jira, Bitbucket, Confluence)",
                "Submodules, stashing, and visual branching diagrams"
            ]
        },
        {
            name:"Fork",
            description:"Fork is a fast, lightweight, and elegant Git client for Mac and Windows that combines speed with powerful functionality. This Git GUI features an exceptional side-by-side diff viewer supporting text and image comparisons, making code review efficient and intuitive. Fork excels in complex Git operations with its visual interactive rebase tool for editing, reordering, and squashing commits, advanced merge conflict resolver with built-in helper, and comprehensive blame and history views for tracking file changes at line-level detail. The application supports essential Git workflows including fetch, pull, push, commit, amend, branching, tagging, cherry-picking, reverting, merging, rebasing, stashing, and submodules management. Fork's clean, customizable interface offers dark mode, repository manager with quick access to recent projects, staging and unstaging at line-level precision, Git-flow automation, Git LFS support, and reflog for recovering lost commits. With free evaluation and one-time purchase pricing at $59.99, Fork delivers professional Git management without subscription fees, making it ideal for individual developers and small teams seeking a polished, efficient Git desktop client.",
            price:"Free",
            os:"Windows, Mac",
            imageUrl:"https://git-fork.com/images/logo5.png",
            website:"https://git-fork.com",
            keyFeatures: [
                "Exceptional side-by-side diff viewer with image comparison",
                "Visual interactive rebase for editing and reordering commits",
                "Advanced merge conflict resolver with helper",
                "Line-level staging and unstaging precision",
                "Dark mode and customizable interface",
                "Git-flow automation and Git LFS support",
                "One-time purchase at $59.99 (no subscription)"
            ]
        },
        {
            name:"Tower",
            description:"Tower is the most powerful premium Git client for Mac and Windows, trusted by over 100,000 developers, designers, and teams worldwide. This professional Git GUI combines ease of use with advanced Git functionality, featuring intuitive drag-and-drop operations for staging, branching, and merging, a unique visual conflict wizard for stress-free conflict resolution, undo capabilities for virtually any Git action, and comprehensive file history tracking. Tower's powerful features include single-line staging for precise commit control, visual interactive rebase with drag-and-drop commit reordering, pull request management directly from the desktop, Git-flow and stacked pull requests workflows, Git LFS and submodules support, cherry-picking, blame annotations, and advanced search across repositories. The application offers productivity-enhancing quick actions, single-click repository cloning, automatic stashing and fetching, and seamless integrations with GitHub, GitLab, Bitbucket, Azure DevOps, and other hosting platforms. Tower provides extensive documentation, Git learning resources, and exceptional customer support. Available with student and education discounts, Tower is the professional choice for developers and designers requiring maximum Git productivity and workflow efficiency.",
            price:"Paid",
            os:"Mac, Windows",
            imageUrl:"https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/tower.PNG",
            website:"https://www.git-tower.com",
            keyFeatures: [
                "Unique visual conflict wizard for easy resolution",
                "Undo capabilities for virtually any Git action",
                "Single-line staging and drag-and-drop operations",
                "Stacked pull requests and Git-flow workflows",
                "Pull request management from desktop",
                "Integrations with GitHub, GitLab, Bitbucket, Azure DevOps",
                "Student and education discounts available"
            ]
        },
        {
            name:"GitHub Desktop",
            description:"GitHub Desktop is the official free Git GUI client from GitHub, designed to simplify Git workflows and eliminate command-line complexity for Windows and Mac users. This beginner-friendly Git desktop application features seamless GitHub integration with one-click repository cloning, pull request creation, review, and management directly from your desktop. GitHub Desktop offers precision code review with advanced diff viewing options, unique drag-and-drop functionality for cherry-picking, squashing, and reordering commits in your branch history, flexible stash management for work-in-progress changes without committing, and easy commit amendments, reversals, and history modifications. The intuitive interface provides visual branch management, merge conflict detection and resolution, co-authoring support for pair programming, and integration with popular code editors including VS Code, Atom, and Sublime Text. As an open-source, community-supported project, GitHub Desktop receives regular updates with new features and improvements. Perfect for students, open-source contributors, and teams working primarily with GitHub repositories, this Git client focuses on essential workflows while maintaining simplicity and productivity. The application also includes a beta channel for early access to upcoming features.",
            price:"Free",
            os:"Windows, Mac",
            imageUrl:"https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/githubDesktop.jpg",
            website:"https://github.com/apps/desktop",
            keyFeatures: [
                "Seamless GitHub integration with one-click cloning",
                "Drag-and-drop for cherry-picking and reordering commits",
                "Advanced diff viewing and code review precision",
                "Stash management for work-in-progress changes",
                "Co-authoring support for pair programming",
                "Integration with VS Code, Atom, and Sublime Text",
                "Open-source and completely free"
            ]
        }
        
];
}