import { IGitClientItem } from "../interfaces";

export class PopularGitClients{
    static readonly list:IGitClientItem[]=[
        {
            name:"LithiumGit",
            description:"LithiumGit is a powerful, free, and open-source Git GUI client designed to optimize your Git workflow and eliminate the fear of version control complexity. Built for Windows, Mac, and Linux, this cross-platform Git desktop application provides an intuitive graphical interface that makes Git operations accessible to developers of all skill levels. As an origin-independent Git client, LithiumGit seamlessly works with any Git hosting platform including GitHub, GitLab, BitBucket, Gerrit, and custom Git servers, offering complete flexibility for your development environment. The revolutionary interactive graph view stands as LithiumGit's signature feature, providing a comprehensive visual overview of your entire repository history where you can perform advanced Git operations like merge, rebase, cherry-pick, branch creation, checkout, and commit analysis directly from the graph interface. Unlike many Git clients, LithiumGit requires no registration or login - simply download, install, and start managing your repositories immediately. It leverages your system's existing Git installation, ensuring compatibility and reliability. The application features intelligent stash management with pop, apply, and delete operations, advanced commit searching and filtering, local changes visualization with line-by-line diff viewing, user and remote configuration management, repository cloning, and recent projects tracking for quick access. Developed by a dedicated open-source community since 2021, LithiumGit welcomes contributions on GitHub and continues to evolve with regular updates and improvements. Perfect for individual developers, small teams, and organizations seeking a reliable, feature-rich Git client without licensing costs or subscription fees. Experience Git management the way it should be - visual, intuitive, and completely free.",
            os:"Windows, Mac, & Linux",
            price:"Free",
            imageUrl:"https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png",
            website:"https://lithiumgit.com",
            firstReleaseYear: 2025,
            keyFeatures: [
                "Revolutionary interactive graph view - visualize entire repository history and perform merge, rebase, cherry-pick, and branch operations directly from the graph",
                "100% free and open-source with no registration, login, or subscription required",
                "Origin-independent architecture - works seamlessly with GitHub, GitLab, BitBucket, Gerrit, and any Git hosting platform",
                "Cross-platform support for Windows, Mac, and Linux with native performance",
                "Advanced stash management - easily stash all changes, pop, apply, and delete stashes with visual interface",
                "Powerful commit search and filtering - quickly find specific commits in large repositories",
                "Line-by-line diff viewer - review local changes with precision before committing",
                "User and remote configuration UI - manage Git settings, user info, and remote URLs graphically",
                "One-click repository cloning and project initialization (git init equivalent)",
                "Recent projects tracking for instant access to your repositories",
                "No external dependencies - uses your system's installed Git for maximum compatibility",
                "Active open-source development - community-driven with GitHub contributions welcomed",
                "Commit and amend functionality with intuitive UI",
                "Complete branch management - create, delete, checkout, and visualize branches effortlessly",
                "Designed by developers for developers - optimized for real-world Git workflows"
            ]
        },
        {
            name:"GitKraken",
            description:"GitKraken Desktop is a premium cross-platform Git GUI client that simplifies version control for developers and teams on Windows, Mac, and Linux. This powerful Git management tool features AI-assisted workflows, GitKraken Insights for engineering intelligence, and comprehensive DORA metrics tracking. With its stunning visual interface, GitKraken offers intuitive drag-and-drop commit management, cherry-picking, squashing, and interactive rebase capabilities. Built-in integrations with GitHub, GitLab, Bitbucket, Jira, and Trello make it perfect for agile development teams. Advanced features include predictive merge conflict detection and resolution, Git LFS support, GitFlow automation, submodules management, and real-time collaboration tools. GitKraken includes GitLens for VS Code IDE integration and GitKraken CLI for terminal users, providing a complete DevEx platform with AI-powered code insights, developer productivity analytics, and comprehensive Git learning resources. Ideal for solo developers and enterprise teams seeking enhanced Git workflow efficiency.",
            price:"Free on public repos, Pro $4.95 per user, Teams $8.95 per user, Enterprise $18.95 per user",
            os:"Windows, Mac, & Linux",
            imageUrl:"https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/05/GitKraken-logo.webp",
            website:"https://www.gitkraken.com",
            firstReleaseYear: 2015,
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
            name:"TortoiseGit",
            description:"TortoiseGit is a free, open-source Windows shell extension for Git version control, implemented as a Windows Explorer integration that provides seamless Git operations directly from the Windows context menu. First released in 2008, TortoiseGit is based on the popular TortoiseSVN architecture and offers a native Windows experience for Git users who prefer integrated shell functionality over standalone applications. This powerful Git client features intuitive overlay icons in Windows Explorer that display the real-time status of working trees and files, making it instantly clear which files are modified, added, deleted, or untracked. TortoiseGit excels in providing comprehensive Git functionality through right-click context menus, eliminating the need for command-line operations while maintaining full Git capabilities. The application includes TortoiseGitMerge, a built-in visual diff and merge tool for comparing files and resolving conflicts with side-by-side comparison views. Supporting all standard Git operations including commit, push, pull, fetch, clone, branch management, merge, rebase, cherry-pick, and stash, TortoiseGit integrates seamlessly with Windows workflows. Available in 34 languages with 7 full translations, TortoiseGit provides excellent localization support for international development teams. The tool supports SSH key management, GPG signing, Git LFS (Large File Support), submodules, and advanced features like interactive rebase and blame annotations. As a Windows-exclusive solution, TortoiseGit is ideal for developers and teams who work primarily in Windows environments and prefer shell integration over standalone Git GUI applications. Released under the GNU General Public License, TortoiseGit is completely free with an active open-source community contributing regular updates and improvements. Perfect for Windows developers seeking efficient Git management without leaving Windows Explorer.",
            price:"Free",
            os:"Windows",
            imageUrl:"https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/tortoisegit.png",
            website:"https://tortoisegit.org",
            firstReleaseYear: 2008,
            keyFeatures: [
                "Native Windows shell integration - access Git commands directly from Windows Explorer context menu",
                "Overlay icons showing real-time file and repository status in Windows Explorer",
                "TortoiseGitMerge - built-in visual diff and merge tool for conflict resolution",
                "Completely free and open-source under GNU GPL with active community",
                "Available in 34 languages with comprehensive localization support",
                "Full Git functionality including commit, push, pull, branch management, merge, and rebase",
                "SSH key management and GPG signing support built-in",
                "Git LFS support for managing large files efficiently",
                "Submodules management and advanced features like interactive rebase",
                "Windows-exclusive design optimized for native Windows workflow integration"
            ]
        },        
        {
            name:"Fork",
            description:"Fork is a fast, lightweight, and elegant Git client for Mac and Windows that combines speed with powerful functionality. This Git GUI features an exceptional side-by-side diff viewer supporting text and image comparisons, making code review efficient and intuitive. Fork excels in complex Git operations with its visual interactive rebase tool for editing, reordering, and squashing commits, advanced merge conflict resolver with built-in helper, and comprehensive blame and history views for tracking file changes at line-level detail. The application supports essential Git workflows including fetch, pull, push, commit, amend, branching, tagging, cherry-picking, reverting, merging, rebasing, stashing, and submodules management. Fork's clean, customizable interface offers dark mode, repository manager with quick access to recent projects, staging and unstaging at line-level precision, Git-flow automation, Git LFS support, and reflog for recovering lost commits. With free evaluation and one-time purchase pricing at $59.99, Fork delivers professional Git management without subscription fees, making it ideal for individual developers and small teams seeking a polished, efficient Git desktop client.",
            price:"Free",
            os:"Windows, Mac",
            imageUrl:"https://git-fork.com/images/logo5.png",
            website:"https://git-fork.com",
            firstReleaseYear: 2017,
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
            name:"Sourcetree",
            description:"Sourcetree is a completely free Git and Mercurial desktop client for Windows and Mac, developed by Atlassian. This beginner-friendly Git GUI simplifies distributed version control with an intuitive visual interface that eliminates the need for command-line Git knowledge. Sourcetree offers comprehensive features including detailed branching diagrams for team progress tracking, Git-flow workflow support out of the box, Git Large File Support (LFS) for managing large assets, interactive rebase for clean commit history, submodules and subtree management, and local commit search functionality. The application provides excellent visualization of code changes with file, hunk, or line-level staging and unstaging capabilities. Seamlessly integrated with Bitbucket, GitHub, GitLab, and Atlassian's ecosystem (Jira, Confluence, Bamboo), Sourcetree is perfect for development teams seeking a free, powerful Git client. Additional features include remote repository management, cherry-picking, stashing, merge conflict resolution tools, and comprehensive Git status monitoring. Sourcetree Enterprise edition offers centralized deployment and management for large organizations.",
            price:"Free",
            os:"Windows, Mac",
            imageUrl:"https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/sourceTree.png",
            website:"https://www.sourcetreeapp.com",
            firstReleaseYear: 2010,
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
            name:"Tower",
            description:"Tower is the most powerful premium Git client for Mac and Windows, trusted by over 100,000 developers, designers, and teams worldwide. This professional Git GUI combines ease of use with advanced Git functionality, featuring intuitive drag-and-drop operations for staging, branching, and merging, a unique visual conflict wizard for stress-free conflict resolution, undo capabilities for virtually any Git action, and comprehensive file history tracking. Tower's powerful features include single-line staging for precise commit control, visual interactive rebase with drag-and-drop commit reordering, pull request management directly from the desktop, Git-flow and stacked pull requests workflows, Git LFS and submodules support, cherry-picking, blame annotations, and advanced search across repositories. The application offers productivity-enhancing quick actions, single-click repository cloning, automatic stashing and fetching, and seamless integrations with GitHub, GitLab, Bitbucket, Azure DevOps, and other hosting platforms. Tower provides extensive documentation, Git learning resources, and exceptional customer support. Available with student and education discounts, Tower is the professional choice for developers and designers requiring maximum Git productivity and workflow efficiency.",
            price:"Paid",
            os:"Mac, Windows",
            imageUrl:"https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/tower.PNG",
            website:"https://www.git-tower.com",
            firstReleaseYear: 2010,
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
            firstReleaseYear: 2015,
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