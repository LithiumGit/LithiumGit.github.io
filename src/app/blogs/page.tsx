import { Config } from '../../config';
import { IMetadataParams } from '../../lib/interfaces';
import { UiUtils } from '../../lib/utilities/UiUtils';
import '../styles/blogs/blog_index.scss';

const PAGE_URL = "https://lithiumgit.com/blogs";
const DATE_MODIFIED = Config.PublishedDate;

const blogs = [
    {
        title: "Git Merge vs Rebase - What's the Difference and When to Use Each",
        href: "/blogs/git-merge-vs-rebase",
        category: "Git Workflow",
        description: "Understand how merge and rebase shape history differently, when each operation is safe, and how LithiumGit visualizes both workflows.",
        note: "Best read before choosing a team branching policy.",
    },
    {
        title: "Share Your Local Changes With a Team Member",
        href: "/blogs/share-local-changes-with-team-member-using-git-patch-and-lithiumgit",
        category: "Collaboration",
        description: "Use git patch files and LithiumGit import/export actions to hand off local, uncommitted changes without pushing a branch.",
        note: "Useful for quick reviews, debugging handoffs, and experimental work.",
    },
    {
        title: "Stop Guessing: Choose the Right Git Merge Strategy Every Time",
        href: "/blogs/stop-guessing-choose-the-right-git-merge-strategy-every-time",
        category: "Git Internals",
        description: "A visual guide to fast-forward, ort, recursive, resolve, subtree, octopus, ours, and squash merge strategies.",
        note: "Keep this nearby when a merge is not as simple as it looks.",
    },
    {
        title: "Best Git Desktop Applications: Top Git GUI Clients Compared",
        href: "/most-popular-git-gui-clients",
        category: "Git Tools",
        description: "Compare popular Git desktop apps across workflow fit, platform support, pricing, and developer experience.",
        note: "Start here when selecting a Git GUI for your team.",
    },
];

const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "LithiumGit Blogs",
    "description": "Git tutorials, workflow guides, and Git GUI comparisons from LithiumGit.",
    "url": PAGE_URL,
    "dateModified": DATE_MODIFIED,
    "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": blogs.length,
        "itemListElement": blogs.map((blog, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": blog.title,
            "url": `https://lithiumgit.com${blog.href}`,
            "description": blog.description,
        })),
    },
};

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args, "blogs");
    data.title = "LithiumGit Blogs | Git Tutorials, Workflow Guides, and Git GUI Tips";
    data.description = "Browse LithiumGit blog posts about Git merge, rebase, patch sharing, merge strategies, and Git GUI client comparisons.";
    data.keywords = "LithiumGit blogs, Git tutorials, Git workflow, Git merge, Git rebase, git patch, Git GUI client, version control guides";
    data.openGraph = {
        ...data.openGraph,
        title: "LithiumGit Blogs | Git Tutorials and Workflow Guides",
        description: "Developer-focused Git tutorials and practical LithiumGit workflow guides in one place.",
        type: "website",
        url: PAGE_URL,
    };
    (data as any).twitter = {
        card: "summary",
        title: "LithiumGit Blogs | Git Tutorials and Workflow Guides",
        description: "Browse practical Git tutorials, workflow notes, and Git GUI comparisons from LithiumGit.",
    };
    return data;
}

export default function Blogs() {
    return (
        <main className="blogs-index">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />
            <div className="content bg-second-color">
                <div className="blogs-header">
                    <h1>LithiumGit Blogs</h1>
                    <p>
                        Practical Git writing for software developers: visual workflows, command-line equivalents, collaboration patterns, and tool comparisons that help teams make cleaner version-control decisions.
                    </p>
                </div>

                <div className="blog-notes">
                    <div className="blog-note">
                        <strong>Workflow clarity</strong>
                        Read the merge, rebase, and patch guides when the team needs a shared Git vocabulary.
                    </div>
                    <div className="blog-note">
                        <strong>Visual learning</strong>
                        Most guides pair Git CLI commands with LithiumGit screens so behavior is easier to inspect.
                    </div>
                    <div className="blog-note">
                        <strong>Team decisions</strong>
                        Use these posts to decide when to push a branch, share a patch, squash commits, or preserve history.
                    </div>
                </div>

                <section className="blog-grid" aria-label="Blog posts">
                    {blogs.map((blog) => (
                        <a className="blog-card" href={blog.href} key={blog.href}>
                            <span className="blog-card-kicker">{blog.category}</span>
                            <h2>{blog.title}</h2>
                            <p>{blog.description}</p>
                            <span className="blog-card-note">{blog.note}</span>
                        </a>
                    ))}
                </section>
            </div>
        </main>
    );
}
