import { IMetadataParams } from '../../../lib/interfaces';
import { UiUtils } from '../../../lib/utilities/UiUtils';
import '../../styles/blogs/anthropic_scion.scss';

const PAGE_URL = "https://lithiumgit.com/blogs/why-anthropic-replaced-git-with-scion";
const SOURCE_URL = "https://www.anthropic.com/research/redesigning-source-control";
const DATE_PUBLISHED = "2026-10-29";
const DATE_MODIFIED = "2026-10-29";
const CURRENT_YEAR = new Date().getFullYear();

const faqs = [
    {
        q: "What is Anthropic Scion?",
        a: "Scion is Anthropic's in-house source control system. In 2026, Anthropic moved its main monorepo from Git to Scion in five months. Instead of every client holding a complete copy of the repository, Scion keeps history on horizontally scalable servers that create commits, perform merges and rebases, and answer history questions, while clients fetch only the files they actually need."
    },
    {
        q: "Why did Anthropic stop using Git for its monorepo?",
        a: "AI agents pushed the merge rate from about 2,500 changes a day in May 2026 to over 30,000 a day by September, on a repository whose main-branch history is almost 100 GB and which was checked out around 25 million times a day for CI. Git's decentralized design, where every clone is a complete repository, worked against a setup where nearly every client was an always-online agent or CI job talking to one authoritative copy."
    },
    {
        q: "Is Git being replaced?",
        a: "No. Anthropic says Scion \"is by no means a suitable replacement for git for general use\" and that its ideas only make sense for truly enormous monorepos. Git itself has not changed, and Git, GitHub, GitLab, and Git clients work exactly as before."
    },
    {
        q: "Can I use Scion?",
        a: "No. Scion runs only inside Anthropic. Anthropic says it is difficult to offer Scion in a form that would be broadly useful to other organizations, so it is sharing the design ideas instead and hopes to work with GitHub, GitLab, and the open-source community to bring some of them to Git."
    },
    {
        q: "How is Scion different from Git?",
        a: "Git is distributed: every clone holds the full history, and you commit locally and push. Scion is centralized and always online: commits, merges, and rebases happen on the server, each change is stored as a changeset listing only the files that changed, clients request individual objects by hash instead of downloading packfiles, and working copies are optional and sparse by design."
    },
    {
        q: "What can I do today if my Git repository is very large?",
        a: "Git already has tools that follow some of the same ideas: partial clone (git clone --filter=blob:none) downloads file contents only when needed, sparse-checkout limits the working copy to the folders you use, shallow clones skip old history, and scalar clone sets up partial clone and sparse-checkout for you."
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "headline": `Why Anthropic Replaced Git With Scion — What Broke, What Changed, and What It Means for You (${CURRENT_YEAR})`,
    "description": "Why Anthropic moved its monorepo off Git, what Scion changes about commits, history, fetching, and caching, and what it means for everyday Git users — explained with diagrams.",
    "url": PAGE_URL,
    "datePublished": DATE_PUBLISHED,
    "dateModified": DATE_MODIFIED,
    "author": { "@type": "Organization", "name": "LithiumGit", "url": "https://lithiumgit.com" },
    "publisher": {
        "@type": "Organization",
        "name": "LithiumGit",
        "url": "https://lithiumgit.com",
        "logo": { "@type": "ImageObject", "url": "https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png" }
    },
    "image": { "@type": "ImageObject", "url": "https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png", "width": 512, "height": 512 },
    "articleSection": "Git Ecosystem",
    "keywords": "Anthropic Scion, Anthropic replaced Git, Scion version control, Git alternative, monorepo source control, Git at scale, LithiumGit",
    "citation": SOURCE_URL,
    "wordCount": 3000,
    "inLanguage": "en-US",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lithiumgit.com" },
        { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://lithiumgit.com/blogs" },
        { "@type": "ListItem", "position": 3, "name": "Why Anthropic Replaced Git With Scion", "item": PAGE_URL },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
};

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args, "blogs/why-anthropic-replaced-git-with-scion");
    data.title = `Why Anthropic Replaced Git With Scion — What Broke and What Changed (${CURRENT_YEAR})`;
    data.description = `Anthropic moved its monorepo off Git and onto Scion, an in-house version control system built for AI agents. Here is what broke, what Scion changes, how it solves the problem, and what it means for Git users — explained with diagrams.`;
    data.keywords = `Anthropic Scion, Anthropic replaced Git, Anthropic version control, Scion source control, Git alternative, is Git being replaced, Git monorepo scaling, Git at scale, AI agents Git, git partial clone, git sparse-checkout, scalar, LithiumGit, git GUI client`;
    data.openGraph = {
        ...data.openGraph,
        title: `Why Anthropic Replaced Git With Scion (${CURRENT_YEAR})`,
        description: `What broke when AI agents hit Git at 30,000 merges a day, what Scion changes, and why Git isn't going anywhere — explained with diagrams.`,
        type: 'article',
        url: PAGE_URL,
        images: [
            {
                url: 'https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png',
                width: 512,
                height: 512,
                alt: 'LithiumGit — Why Anthropic Replaced Git With Scion',
            },
        ],
        // @ts-ignore
        publishedTime: DATE_PUBLISHED,
        modifiedTime: DATE_MODIFIED,
        section: 'Git Ecosystem',
        tags: ['Anthropic', 'Scion', 'git', 'version control', 'monorepo', 'LithiumGit'],
    };
    (data as any).twitter = {
        card: 'summary_large_image',
        title: `Why Anthropic Replaced Git With Scion (${CURRENT_YEAR})`,
        description: `What broke, what Scion changes, and what it means for everyday Git users — explained with diagrams.`,
        images: ['https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png'],
    };
    (data as any).robots = { index: true, follow: true, googleBot: { index: true, follow: true } };
    return data;
}

export default function WhyAnthropicReplacedGitWithScion() {
    return (
        <main className="blog-page">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <div className="content bg-second-color">

                <div className="blog-header">
                    <h1>Why Anthropic Replaced Git With Scion — What Broke, What Changed, and What It Means for You</h1>
                    <p className="blog-meta">Published <time dateTime={DATE_PUBLISHED}>{DATE_PUBLISHED}</time> &nbsp;·&nbsp; LithiumGit Team &nbsp;·&nbsp; 13 min read</p>
                </div>

                <p className="blog-intro">
                    In October 2026, Anthropic published an engineering post explaining that it had moved its main
                    monorepo off <strong>Git</strong> and onto <strong>Scion</strong>, a version control system it built
                    in-house. Headlines quickly turned that into &quot;Anthropic cancels Git.&quot; The real story is
                    narrower, and more interesting: AI agents pushed one very large repository past the point where
                    Git&apos;s design fit the way it was being used. This article explains what went wrong, what Scion
                    does differently, and how each change solves a specific problem — with diagrams for every step.
                </p>

                <div className="concept-box">
                    <strong>The short version</strong>
                    Anthropic replaced Git for <em>its own monorepo</em>, not for anyone else. Git itself has not
                    changed, Scion is not available outside Anthropic, and Anthropic says Scion &quot;is by no means a
                    suitable replacement for git for general use.&quot; If you use Git, nothing about your workflow
                    changes today.
                </div>

                <p className="source-note">
                    Source: <a href={SOURCE_URL} target="_blank" rel="noopener noreferrer">Redesigning source control at
                    Anthropic</a>, Anthropic Engineering, October 13, 2026 (updated October 15). All figures below come
                    from that post.
                </p>

                {/* ── SECTION 1 — THE PROBLEM ── */}
                <section className="blog-section">
                    <h2>The Problem: AI Agents Outgrew Git</h2>
                    <p>
                        Anthropic&apos;s post opens with a claim that would have sounded strange a few years ago: writing
                        code is no longer its bottleneck. As Claude made writing code dramatically faster, the bottleneck
                        moved to the infrastructure around it — source control, builds, and CI — which was, in Anthropic&apos;s
                        words, built for human scale.
                    </p>

                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Measure</th>
                                <th>Figure from Anthropic&apos;s post</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Changes merged per day</td>
                                <td>About 2,500 in May 2026 → over 30,000 by September</td>
                            </tr>
                            <tr>
                                <td>History of the main branch</td>
                                <td>Almost 100 GB</td>
                            </tr>
                            <tr>
                                <td>Compressed working copy</td>
                                <td>Over 25 GB</td>
                            </tr>
                            <tr>
                                <td>Code checkouts for CI</td>
                                <td>On the order of 25 million per day</td>
                            </tr>
                            <tr>
                                <td>Traffic if fetched naively</td>
                                <td>Over 600 PB of git traffic per day</td>
                            </tr>
                            <tr>
                                <td>Git mirrors needed to cope</td>
                                <td>Several hundred at peak</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        Anthropic did not give up on Git easily. It used the tools Git offers for working with a slice of a
                        repository — shallow clones, sparse checkouts, and promisor remotes (the mechanism behind partial
                        clones) — and built more on top: several hundred internal Git mirrors to spread the load, and
                        repository snapshots called <strong>seeds</strong>, kept in blob storage so jobs did not have to
                        clone from scratch.
                    </p>
                    <p>
                        Each workaround bought time and added its own cost. The mirrors became harder to operate as the
                        merge rate climbed. Seeds fell further behind the tip of <code>main</code> between refreshes.
                        And history-based operations such as diff and blame needed extra care to keep working on partial
                        clones.
                    </p>

                    <div className="blog-diagram">
                        <svg viewBox="0 0 960 420" role="img" aria-label="Diagram of Git at Anthropic's scale: one central repository with almost 100 GB of history feeds several hundred git mirrors and stale seed snapshots, which serve a large grid of agents and CI jobs that each need a full clone, adding up to about 25 million checkouts a day">
                            <defs>
                                <marker id="scArrowA" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                    <path className="dg-marker" d="M0,0 L10,5 L0,10 z" />
                                </marker>
                            </defs>

                            {/* Central repository */}
                            <rect className="dg-box" x="20" y="140" width="200" height="120" rx="8" />
                            <text className="dg-title" x="120" y="172" textAnchor="middle">Central repo</text>
                            <text className="dg-file" x="120" y="198" textAnchor="middle">one authoritative copy</text>
                            <text className="dg-sub" x="120" y="222" textAnchor="middle">main history ≈ 100 GB</text>
                            <text className="dg-sub" x="120" y="240" textAnchor="middle">working copy over 25 GB</text>

                            {/* Mirrors */}
                            <rect className="dg-box" x="290" y="60" width="180" height="50" rx="6" />
                            <text className="dg-row-label" x="380" y="90" textAnchor="middle">git mirror</text>
                            <rect className="dg-box" x="290" y="140" width="180" height="50" rx="6" />
                            <text className="dg-row-label" x="380" y="170" textAnchor="middle">git mirror</text>
                            <rect className="dg-box" x="290" y="220" width="180" height="50" rx="6" />
                            <text className="dg-row-label" x="380" y="250" textAnchor="middle">git mirror</text>
                            <text className="dg-note" x="380" y="298" textAnchor="middle">several hundred at peak</text>
                            <path className="dg-arrow" d="M220,170 L286,88" markerEnd="url(#scArrowA)" />
                            <path className="dg-arrow" d="M220,200 H286" markerEnd="url(#scArrowA)" />
                            <path className="dg-arrow" d="M220,230 L286,247" markerEnd="url(#scArrowA)" />

                            {/* Seeds */}
                            <rect className="dg-box-problem" x="290" y="330" width="180" height="60" rx="6" />
                            <text className="dg-row-label" x="380" y="355" textAnchor="middle">seed snapshots</text>
                            <text className="dg-sub" x="380" y="375" textAnchor="middle">fall behind main</text>
                            <path className="dg-arrow" d="M120,260 V360 H286" markerEnd="url(#scArrowA)" />

                            {/* Clients that each need a full clone */}
                            <rect className="dg-box-problem" x="560" y="40" width="110" height="48" rx="6" />
                            <text className="dg-file" x="615" y="61" textAnchor="middle">agent</text>
                            <text className="dg-sub" x="615" y="78" textAnchor="middle">full clone</text>
                            <rect className="dg-box-problem" x="685" y="40" width="110" height="48" rx="6" />
                            <text className="dg-file" x="740" y="61" textAnchor="middle">CI job</text>
                            <text className="dg-sub" x="740" y="78" textAnchor="middle">full clone</text>
                            <rect className="dg-box-problem" x="810" y="40" width="110" height="48" rx="6" />
                            <text className="dg-file" x="865" y="61" textAnchor="middle">agent</text>
                            <text className="dg-sub" x="865" y="78" textAnchor="middle">full clone</text>

                            <rect className="dg-box-problem" x="560" y="105" width="110" height="48" rx="6" />
                            <text className="dg-file" x="615" y="126" textAnchor="middle">CI job</text>
                            <text className="dg-sub" x="615" y="143" textAnchor="middle">full clone</text>
                            <rect className="dg-box-problem" x="685" y="105" width="110" height="48" rx="6" />
                            <text className="dg-file" x="740" y="126" textAnchor="middle">agent</text>
                            <text className="dg-sub" x="740" y="143" textAnchor="middle">full clone</text>
                            <rect className="dg-box-problem" x="810" y="105" width="110" height="48" rx="6" />
                            <text className="dg-file" x="865" y="126" textAnchor="middle">CI job</text>
                            <text className="dg-sub" x="865" y="143" textAnchor="middle">full clone</text>

                            <rect className="dg-box-problem" x="560" y="170" width="110" height="48" rx="6" />
                            <text className="dg-file" x="615" y="191" textAnchor="middle">agent</text>
                            <text className="dg-sub" x="615" y="208" textAnchor="middle">full clone</text>
                            <rect className="dg-box-problem" x="685" y="170" width="110" height="48" rx="6" />
                            <text className="dg-file" x="740" y="191" textAnchor="middle">CI job</text>
                            <text className="dg-sub" x="740" y="208" textAnchor="middle">full clone</text>
                            <rect className="dg-box-problem" x="810" y="170" width="110" height="48" rx="6" />
                            <text className="dg-file" x="865" y="191" textAnchor="middle">agent</text>
                            <text className="dg-sub" x="865" y="208" textAnchor="middle">full clone</text>

                            <rect className="dg-box-problem" x="560" y="235" width="110" height="48" rx="6" />
                            <text className="dg-file" x="615" y="256" textAnchor="middle">CI job</text>
                            <text className="dg-sub" x="615" y="273" textAnchor="middle">full clone</text>
                            <rect className="dg-box-problem" x="685" y="235" width="110" height="48" rx="6" />
                            <text className="dg-file" x="740" y="256" textAnchor="middle">agent</text>
                            <text className="dg-sub" x="740" y="273" textAnchor="middle">full clone</text>
                            <rect className="dg-box-problem" x="810" y="235" width="110" height="48" rx="6" />
                            <text className="dg-file" x="865" y="256" textAnchor="middle">CI job</text>
                            <text className="dg-sub" x="865" y="273" textAnchor="middle">full clone</text>

                            <path className="dg-arrow" d="M470,85 L556,66" markerEnd="url(#scArrowA)" />
                            <path className="dg-arrow" d="M470,160 L556,131" markerEnd="url(#scArrowA)" />
                            <path className="dg-arrow" d="M470,170 L556,192" markerEnd="url(#scArrowA)" />
                            <path className="dg-arrow" d="M470,245 L556,258" markerEnd="url(#scArrowA)" />

                            <text className="dg-danger-note" x="740" y="320" textAnchor="middle">≈ 25 million CI checkouts per day</text>
                            <text className="dg-sub" x="740" y="340" textAnchor="middle">fetched naively: over 600 PB of git traffic a day</text>

                            <text className="dg-note" x="560" y="395">Every clone is a complete, self-contained repository —</text>
                            <text className="dg-note" x="560" y="411">designed for offline work these clients never do.</text>
                        </svg>
                        <p className="diagram-caption">
                            Git at Anthropic&apos;s scale: one authoritative repository, hundreds of mirrors and snapshots
                            to spread the load, and millions of checkouts a day by clients that each expect a full
                            repository.
                        </p>
                    </div>
                </section>

                {/* ── SECTION 2 — THE MISMATCH ── */}
                <section className="blog-section">
                    <h2>Why Git&apos;s Design Worked Against Them</h2>
                    <p>
                        Git is a <strong>decentralized</strong> system. Every clone is a complete, self-contained
                        repository with the entire history, so you can commit, branch, diff, and read the log on a plane
                        with no network. That is exactly what makes Git so good for open source and for teams spread
                        across the world.
                    </p>
                    <p>
                        Anthropic&apos;s situation was the opposite. It was, in its own words, using Git as a
                        <strong> centralized system with one authoritative copy</strong>, and nearly all of its clients
                        were agents and jobs that are online by definition. Every one of those clients paid for Git&apos;s
                        offline-first promises — downloading and storing history, keeping a full repository on disk —
                        without ever using them. The post&apos;s conclusion is blunt: the properties that make Git
                        excellent for distributed, offline work were actively undermining its ability to scale as the
                        repository grew.
                    </p>
                    <div className="tip-box">
                        <span className="tip-label">💡 The key insight</span>
                        Git was not too slow or badly built. It was optimized for a different shape of work: many people,
                        often offline, each owning a full copy. Anthropic&apos;s work had become one central repository
                        hammered by tens of thousands of always-online machines. Scion is designed for that shape instead.
                    </div>
                </section>

                {/* ── SECTION 3 — PRINCIPLES ── */}
                <section className="blog-section">
                    <h2>What Anthropic Changed: Scion&apos;s Six Design Principles</h2>
                    <p>
                        A seven-person team built Scion around six principles. Each one reverses an assumption Git makes:
                    </p>
                    <ol>
                        <li><strong>Clients are always online</strong> — so they can fetch data on demand instead of holding everything locally.</li>
                        <li><strong>Client-server asymmetry</strong> — the server does most of the work; the client keeps only a bounded cache.</li>
                        <li><strong>A comprehensive source control service can power many novel applications</strong> — every query is available as an API, so many jobs need no local repository at all.</li>
                        <li><strong>Everything must be horizontally scalable</strong> — no packfiles and no repository maintenance.</li>
                        <li><strong>Commits must be cheap, incremental, and lock-free</strong> — their cost scales with the size of the change, not the size of the repository.</li>
                        <li><strong>The working copy is optional, and sparse by design</strong> — you only download what you read.</li>
                    </ol>
                    <p>The next five sections show how those principles turn into concrete changes.</p>
                </section>

                {/* ── SECTION 4 — SERVER DOES THE WORK ── */}
                <section className="blog-section">
                    <h2>Change 1: The Server Does the Work</h2>
                    <p>
                        In Git, you commit locally and then push to share your work. Your clone does almost everything —
                        commits, merges, rebases, log, blame — because it has the whole history. In Scion, every commit,
                        rebase, or merge happens on the server, so there is nothing to push. The server also answers
                        questions about file history and blame.
                    </p>

                    <div className="blog-diagram">
                        <svg viewBox="0 0 960 380" role="img" aria-label="Diagram comparing where work happens. In Git, your clone holds full history and runs commit, merge, rebase, log, blame, and maintenance, then pushes packfiles to a remote. In Scion, the scn client keeps a bounded cache and sparse files, and the Scion servers create commits, run merges and rebases, answer blame and history, compute derived data, and expose a query API">
                            <defs>
                                <marker id="scArrowB" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                    <path className="dg-marker" d="M0,0 L10,5 L0,10 z" />
                                </marker>
                            </defs>

                            {/* Git panel */}
                            <rect className="dg-box" x="20" y="20" width="440" height="340" rx="10" />
                            <text className="dg-title" x="40" y="52">Git: commit locally, then push</text>

                            <rect className="dg-inner" x="40" y="80" width="170" height="250" rx="8" />
                            <text className="dg-row-label" x="125" y="108" textAnchor="middle">Your clone</text>
                            <text className="dg-file" x="125" y="140" textAnchor="middle">full history</text>
                            <text className="dg-file" x="125" y="165" textAnchor="middle">git commit</text>
                            <text className="dg-file" x="125" y="190" textAnchor="middle">git merge</text>
                            <text className="dg-file" x="125" y="215" textAnchor="middle">git rebase</text>
                            <text className="dg-file" x="125" y="240" textAnchor="middle">git log / blame</text>
                            <text className="dg-file" x="125" y="265" textAnchor="middle">git gc</text>
                            <text className="dg-sub" x="125" y="310" textAnchor="middle">heavy, but works offline</text>

                            <rect className="dg-inner" x="300" y="130" width="140" height="150" rx="8" />
                            <text className="dg-row-label" x="370" y="158" textAnchor="middle">Remote</text>
                            <text className="dg-file" x="370" y="190" textAnchor="middle">stores history</text>
                            <text className="dg-file" x="370" y="215" textAnchor="middle">moves refs</text>
                            <text className="dg-sub" x="370" y="255" textAnchor="middle">accepts packfiles</text>

                            <path className="dg-arrow" d="M210,175 H296" markerEnd="url(#scArrowB)" />
                            <text className="dg-cmd" x="255" y="166" textAnchor="middle">git push</text>
                            <path className="dg-arrow" d="M300,235 H214" markerEnd="url(#scArrowB)" />
                            <text className="dg-cmd" x="257" y="226" textAnchor="middle">git fetch</text>

                            {/* Scion panel */}
                            <rect className="dg-box-scion" x="500" y="20" width="440" height="340" rx="10" />
                            <text className="dg-title" x="520" y="52">Scion: the server does the work</text>

                            <rect className="dg-inner" x="520" y="80" width="150" height="250" rx="8" />
                            <text className="dg-row-label" x="595" y="108" textAnchor="middle">scn client</text>
                            <text className="dg-file" x="595" y="140" textAnchor="middle">bounded cache</text>
                            <text className="dg-file" x="595" y="165" textAnchor="middle">sparse files</text>
                            <text className="dg-file" x="595" y="190" textAnchor="middle">asks server</text>
                            <text className="dg-sub" x="595" y="310" textAnchor="middle">light, always online</text>

                            <rect className="dg-inner" x="760" y="80" width="160" height="250" rx="8" />
                            <text className="dg-row-label" x="840" y="108" textAnchor="middle">Scion servers</text>
                            <text className="dg-file" x="840" y="140" textAnchor="middle">commits</text>
                            <text className="dg-file" x="840" y="165" textAnchor="middle">merges</text>
                            <text className="dg-file" x="840" y="190" textAnchor="middle">rebases</text>
                            <text className="dg-file" x="840" y="215" textAnchor="middle">blame / history</text>
                            <text className="dg-file" x="840" y="240" textAnchor="middle">derived data</text>
                            <text className="dg-file" x="840" y="265" textAnchor="middle">query API</text>
                            <text className="dg-sub" x="840" y="310" textAnchor="middle">nothing to push</text>

                            <path className="dg-arrow" d="M670,175 H756" markerEnd="url(#scArrowB)" />
                            <text className="dg-cmd" x="713" y="166" textAnchor="middle">RPC</text>
                            <path className="dg-arrow" d="M760,235 H674" markerEnd="url(#scArrowB)" />
                            <text className="dg-cmd" x="717" y="226" textAnchor="middle">objects</text>
                        </svg>
                        <p className="diagram-caption">
                            Git puts the work and the full history on every clone. Scion moves both to the server and
                            keeps the client small.
                        </p>
                    </div>

                    <p>
                        The trade-off is deliberate. The Scion client can compute very little on its own, but in
                        exchange it needs far less data locally. And because the client&apos;s queries are also exposed
                        as an API, many jobs don&apos;t need a local repository at all — a CI job that needs the diff
                        between a commit and its merge base, for example, can simply ask the server for it.
                    </p>
                    <p>
                        <strong>Problem solved:</strong> millions of jobs no longer each download, store, and process
                        history they never use.
                    </p>
                </section>

                {/* ── SECTION 5 — CHANGESETS ── */}
                <section className="blog-section">
                    <h2>Change 2: Changesets Instead of Whole-Project Snapshots</h2>
                    <p>
                        A Git commit points at a <strong>tree</strong>: a snapshot of the entire project at that moment.
                        Git is smart about it — files that didn&apos;t change are shared between commits by their hash —
                        but every commit still describes the whole project, and finding out what changed means comparing
                        two trees.
                    </p>
                    <p>
                        Scion&apos;s unit of work is a <strong>changeset</strong>, an entry in a write-ahead log. A
                        changeset stores most of what you would expect from a commit, but instead of a pointer to a full
                        tree, it stores the list of files that changed relative to its first parent, along with
                        content-addressed pointers to the compressed file contents in blob storage. Changesets are created
                        on the server and are available everywhere instantly.
                    </p>

                    <div className="blog-diagram">
                        <svg viewBox="0 0 960 420" role="img" aria-label="Diagram comparing a Git commit, which points at a tree that is a snapshot of every file in the project, with a Scion changeset, which records only the changed files relative to its first parent with pointers into content-addressed blob storage, plus derived data such as blame, path history, and commit-graph skip lists computed from parents">
                            <defs>
                                <marker id="scArrowC" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                    <path className="dg-marker" d="M0,0 L10,5 L0,10 z" />
                                </marker>
                                <marker id="scArrowCg" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                    <path className="dg-marker-green" d="M0,0 L10,5 L0,10 z" />
                                </marker>
                            </defs>

                            {/* Row 1 — git */}
                            <text className="dg-row-label" x="20" y="72">Git commit</text>
                            <text className="dg-sub" x="20" y="92">points at a full tree</text>

                            <rect className="dg-box" x="200" y="40" width="140" height="64" rx="6" />
                            <text className="dg-row-label" x="270" y="68" textAnchor="middle">commit C2</text>
                            <text className="dg-sub" x="270" y="88" textAnchor="middle">parent: C1</text>
                            <path className="dg-arrow" d="M340,72 H396" markerEnd="url(#scArrowC)" />

                            <rect className="dg-inner" x="400" y="20" width="280" height="140" rx="6" />
                            <text className="dg-title" x="416" y="46">tree (full snapshot)</text>
                            <text className="dg-file" x="416" y="74">README.md</text>
                            <text className="dg-file" x="416" y="96">src/app.ts</text>
                            <text className="dg-cmd" x="560" y="96">changed</text>
                            <text className="dg-file" x="416" y="118">src/db.ts</text>
                            <text className="dg-file" x="416" y="140">…every other file</text>

                            <text className="dg-note" x="700" y="60">Unchanged files are shared by hash,</text>
                            <text className="dg-note" x="700" y="78">but every commit still describes</text>
                            <text className="dg-note" x="700" y="96">the entire project. Finding what</text>
                            <text className="dg-note" x="700" y="114">changed means comparing two trees.</text>

                            <path className="dg-divider" d="M20,190 H940" />

                            {/* Row 2 — scion */}
                            <text className="dg-row-label" x="20" y="242">Scion changeset</text>
                            <text className="dg-sub" x="20" y="262">records only what changed</text>

                            <rect className="dg-box-scion" x="200" y="210" width="140" height="64" rx="6" />
                            <text className="dg-row-label" x="270" y="238" textAnchor="middle">changeset 2</text>
                            <text className="dg-sub" x="270" y="258" textAnchor="middle">first parent: 1</text>
                            <path className="dg-arrow" d="M340,242 H396" markerEnd="url(#scArrowC)" />

                            <rect className="dg-inner" x="400" y="210" width="280" height="64" rx="6" />
                            <text className="dg-title" x="416" y="236">changed files only</text>
                            <text className="dg-file" x="416" y="260">src/app.ts → blob 9f3c…</text>
                            <path className="dg-arrow" d="M680,242 H756" markerEnd="url(#scArrowC)" />

                            <rect className="dg-box-scion" x="760" y="210" width="180" height="64" rx="6" />
                            <text className="dg-row-label" x="850" y="238" textAnchor="middle">blob storage</text>
                            <text className="dg-sub" x="850" y="258" textAnchor="middle">content-addressed</text>

                            <text className="dg-note" x="400" y="300">each changeset is one entry in a write-ahead log, created on the server</text>

                            <rect className="dg-box-dashed" x="400" y="320" width="540" height="80" rx="6" />
                            <text className="dg-title" x="416" y="346">derived data (indexes built from parents)</text>
                            <text className="dg-file" x="416" y="370">blame · path history · commit-graph skip lists</text>
                            <text className="dg-sub" x="416" y="389">computed recursively, either eagerly or on demand</text>
                            <path className="dg-arrow-dash" d="M270,274 V360 H396" markerEnd="url(#scArrowCg)" />
                        </svg>
                        <p className="diagram-caption">
                            A Git commit describes the whole project. A Scion changeset records only what changed, and
                            separate derived-data indexes answer history questions quickly.
                        </p>
                    </div>

                    <p>
                        Recording only the difference has a cost: on its own, a changeset can&apos;t quickly answer
                        questions like &quot;who last edited this line?&quot; or &quot;which commits touched this
                        file?&quot;. Scion answers them with what it calls <strong>derived data</strong> — dedicated
                        structures for blame and path history, and skip lists for walking the commit graph. Each type is
                        defined recursively: its value for a changeset is computed from its values for that
                        changeset&apos;s parents. That means the work for each new commit is small, and Scion can choose,
                        per type, whether to compute it eagerly or only when someone asks.
                    </p>
                    <p>
                        <strong>Problem solved:</strong> creating a commit costs work proportional to the size of the
                        change, not the size of a 100 GB history.
                    </p>
                </section>

                {/* ── SECTION 6 — FETCHING ── */}
                <section className="blog-section">
                    <h2>Change 3: Fetch Exactly What You Need — No Packfiles</h2>
                    <p>
                        When you run <code>git fetch</code>, your client and the server negotiate: the client describes
                        which commits it already has, and the server builds a <strong>packfile</strong> — one compressed
                        bundle containing everything the client is missing — and streams it back. For a normal repository
                        that is efficient. For a repository this size, that single response can be enormous, and it is
                        built specifically for that one request.
                    </p>
                    <p>
                        Scion&apos;s client, <code>scn</code>, works differently. Its negotiation doesn&apos;t tell the
                        server what the client already has. Instead, the client checks its own local store for missing
                        trees and requests them, recursively, by their content hash.
                    </p>

                    <div className="blog-diagram">
                        <svg viewBox="0 0 960 370" role="img" aria-label="Diagram comparing fetching. In git fetch, the client tells the server what it has and wants, and the server builds one packfile for that request, which can be many gigabytes. In Scion, the scn client checks its local store and requests individual trees and blobs by hash from any cache tier, which can answer because objects never change">
                            <defs>
                                <marker id="scArrowD" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                    <path className="dg-marker" d="M0,0 L10,5 L0,10 z" />
                                </marker>
                            </defs>

                            {/* Row 1 — git fetch */}
                            <text className="dg-row-label" x="20" y="82">git fetch</text>
                            <text className="dg-sub" x="20" y="102">negotiate, one big reply</text>

                            <rect className="dg-inner" x="200" y="40" width="170" height="90" rx="8" />
                            <text className="dg-row-label" x="285" y="78" textAnchor="middle">git client</text>
                            <text className="dg-sub" x="285" y="98" textAnchor="middle">full local repository</text>

                            <rect className="dg-box" x="740" y="40" width="200" height="90" rx="8" />
                            <text className="dg-row-label" x="840" y="78" textAnchor="middle">git server</text>
                            <text className="dg-sub" x="840" y="98" textAnchor="middle">builds a packfile</text>

                            <path className="dg-arrow" d="M370,65 H736" markerEnd="url(#scArrowD)" />
                            <text className="dg-sub" x="553" y="57" textAnchor="middle">“here’s what I have — I want main”</text>
                            <path className="dg-arrow" d="M740,110 H374" markerEnd="url(#scArrowD)" />
                            <text className="dg-sub" x="557" y="128" textAnchor="middle">one packfile built for this request — can be many GB</text>

                            <path className="dg-divider" d="M20,165 H940" />

                            {/* Row 2 — scion fetch */}
                            <text className="dg-row-label" x="20" y="250">Scion fetch</text>
                            <text className="dg-sub" x="20" y="270">exact objects by hash</text>

                            <rect className="dg-inner" x="200" y="195" width="170" height="120" rx="8" />
                            <text className="dg-row-label" x="285" y="225" textAnchor="middle">scn client</text>
                            <text className="dg-sub" x="285" y="248" textAnchor="middle">checks its local store,</text>
                            <text className="dg-sub" x="285" y="266" textAnchor="middle">asks only for what</text>
                            <text className="dg-sub" x="285" y="284" textAnchor="middle">is missing</text>

                            <rect className="dg-box-scion" x="740" y="195" width="200" height="120" rx="8" />
                            <text className="dg-row-label" x="840" y="225" textAnchor="middle">any cache tier</text>
                            <text className="dg-sub" x="840" y="248" textAnchor="middle">objects never change,</text>
                            <text className="dg-sub" x="840" y="266" textAnchor="middle">so any cache can answer</text>

                            <text className="dg-file" x="555" y="214" textAnchor="middle">tree 7ac2…</text>
                            <path className="dg-arrow" d="M374,220 H736" markerStart="url(#scArrowD)" markerEnd="url(#scArrowD)" />
                            <text className="dg-file" x="555" y="249" textAnchor="middle">blob 9f3c…</text>
                            <path className="dg-arrow" d="M374,255 H736" markerStart="url(#scArrowD)" markerEnd="url(#scArrowD)" />
                            <text className="dg-file" x="555" y="284" textAnchor="middle">blob 1e8b…</text>
                            <path className="dg-arrow" d="M374,290 H736" markerStart="url(#scArrowD)" markerEnd="url(#scArrowD)" />

                            <text className="dg-note" x="480" y="350" textAnchor="middle">No single multi-gigabyte response, so fetching is resumable — and a sparse checkout simply never asks for some trees.</text>
                        </svg>
                        <p className="diagram-caption">
                            Git negotiates one large, custom response. Scion makes many small requests for objects that
                            never change, so they can be served from cache.
                        </p>
                    </div>

                    <p>
                        Because all Scion data is content-addressed, a stored object never changes. Every request is
                        for one specific, immutable object, so <strong>any cache can answer it</strong>. The process is
                        efficient and resumable because there is no single multi-gigabyte packfile response, and there is
                        no equivalent of packfiles at all.
                    </p>
                    <p>
                        The same design makes sparse and virtual working copies almost free. Sparse checkouts need no
                        special support: the client simply doesn&apos;t ask for trees it doesn&apos;t want. Virtualized
                        checkouts go further and materialize files only when they are read, so a job pays only for what
                        it actually touches.
                    </p>
                    <p>
                        <strong>Problem solved:</strong> no more giant per-request downloads, and no more full working
                        copies for jobs that read a handful of files.
                    </p>
                </section>

                {/* ── SECTION 7 — SERVING TIERS ── */}
                <section className="blog-section">
                    <h2>Change 4: Layers of Caches That Scale Out</h2>
                    <p>
                        Instead of hundreds of full Git mirrors, Scion serves objects through three layers. On each
                        machine, the client talks to a local daemon that stores objects for the whole node. The daemon
                        talks only to regional cache servers that stream objects straight from memory. Only when the cache
                        doesn&apos;t have something does the request reach the authoritative servers, which read from
                        Spanner (Google&apos;s distributed database) or cloud storage as needed.
                    </p>

                    <div className="blog-diagram">
                        <svg viewBox="0 0 960 290" role="img" aria-label="Diagram of Scion's serving tiers from left to right: the scn client, scion-daemon with one per machine, scion-cache as a regional fleet serving from memory, scion-server as the authoritative tier, and storage in Spanner and cloud storage. Every tier answers the same RPCs and keeps a cache hit rate over 99 percent">
                            <defs>
                                <marker id="scArrowE" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                    <path className="dg-marker" d="M0,0 L10,5 L0,10 z" />
                                </marker>
                            </defs>

                            <path className="dg-guide" d="M210,82 V72 H740 V82" />
                            <text className="dg-note" x="475" y="60" textAnchor="middle">identical RPCs at every tier · each tier keeps a cache hit rate over 99%</text>

                            <rect className="dg-inner" x="20" y="100" width="150" height="110" rx="8" />
                            <text className="dg-title" x="95" y="135" textAnchor="middle">scn client</text>
                            <text className="dg-sub" x="95" y="162" textAnchor="middle">bounded local cache</text>
                            <text className="dg-sub" x="95" y="180" textAnchor="middle">lays out the files</text>

                            <rect className="dg-box-scion" x="210" y="100" width="150" height="110" rx="8" />
                            <text className="dg-title" x="285" y="135" textAnchor="middle">scion-daemon</text>
                            <text className="dg-sub" x="285" y="162" textAnchor="middle">one per machine</text>
                            <text className="dg-sub" x="285" y="180" textAnchor="middle">shared by the node</text>

                            <rect className="dg-box-scion" x="400" y="100" width="150" height="110" rx="8" />
                            <text className="dg-title" x="475" y="135" textAnchor="middle">scion-cache</text>
                            <text className="dg-sub" x="475" y="162" textAnchor="middle">regional fleet</text>
                            <text className="dg-sub" x="475" y="180" textAnchor="middle">streams from memory</text>

                            <rect className="dg-box-scion" x="590" y="100" width="150" height="110" rx="8" />
                            <text className="dg-title" x="665" y="135" textAnchor="middle">scion-server</text>
                            <text className="dg-sub" x="665" y="162" textAnchor="middle">authoritative</text>
                            <text className="dg-sub" x="665" y="180" textAnchor="middle">commits, merges, blame</text>

                            <rect className="dg-box" x="780" y="100" width="150" height="110" rx="8" />
                            <text className="dg-title" x="855" y="135" textAnchor="middle">storage</text>
                            <text className="dg-sub" x="855" y="162" textAnchor="middle">Spanner and</text>
                            <text className="dg-sub" x="855" y="180" textAnchor="middle">cloud storage</text>

                            <path className="dg-arrow" d="M170,155 H206" markerEnd="url(#scArrowE)" />
                            <path className="dg-arrow" d="M360,155 H396" markerEnd="url(#scArrowE)" />
                            <path className="dg-arrow" d="M550,155 H586" markerEnd="url(#scArrowE)" />
                            <path className="dg-arrow" d="M740,155 H776" markerEnd="url(#scArrowE)" />

                            <text className="dg-note" x="480" y="248" textAnchor="middle">Tiering is strictly enforced, so a failing regional cache can’t overwhelm the authoritative servers.</text>
                            <text className="dg-sub" x="480" y="268" textAnchor="middle">No machine holds a fully materialized copy of the repository — not even the servers.</text>
                        </svg>
                        <p className="diagram-caption">
                            Requests travel one tier at a time and stop at the first cache that has the object.
                        </p>
                    </div>

                    <p>
                        All three tiers respond to identical RPCs, so in principle any tier could talk to any other —
                        but Anthropic strictly enforces the layering to isolate failures. A broken regional cache should
                        never turn into a flood of traffic against the authoritative servers. Every component scales
                        independently, the servers need little coordination, and there is no fully materialized copy of
                        the repository anywhere, not even on the server.
                    </p>
                    <p>
                        <strong>Problem solved:</strong> capacity grows by adding servers, not by operating hundreds of
                        full mirrors that each need maintenance.
                    </p>
                </section>

                {/* ── SECTION 8 — COMMITS & REFS ── */}
                <section className="blog-section">
                    <h2>Change 5: Lock-Free Commits and (Almost) No Branches</h2>
                    <p>
                        At 30,000 merges a day, any global lock becomes a traffic jam. Scion avoids them. Creating a
                        changeset involves no packfiles to accept, no locking or cross-server coordination, and no refs
                        to move.
                    </p>
                    <p>
                        That last point is the biggest cultural difference from Git. Scion&apos;s development lifecycle
                        discourages refs — branches and tags — except for <code>main</code> and release branches. Refs
                        still exist, but neither creating nor fetching commits involves them, and moving one is a
                        single compare-and-swap on one database row, done separately from creating changesets.
                    </p>
                    <p>
                        Anthropic also moved away from the industry-standard merge queue with a global repository lock,
                        which it hasn&apos;t been able to replicate effectively at agent scale. It relies instead on post-merge and pre-deploy
                        automated testing. That does mean concurrent changes can conflict — but, as the post puts it,
                        Claude can typically fix those conflicts faster than humans can even identify them.
                    </p>
                    <div className="tip-box">
                        <span className="tip-label">⚠️ Don&apos;t copy this part blindly</span>
                        Dropping the merge queue works for Anthropic because agents fix conflicts in seconds and testing
                        after the merge catches problems before deploy. For most human teams, a merge queue or protected
                        branch is still the safer default.
                    </div>
                    <p>
                        <strong>Problem solved:</strong> landing a change no longer waits in line behind thousands of
                        others.
                    </p>
                </section>

                {/* ── SECTION 9 — COMPARISON ── */}
                <section className="blog-section">
                    <h2>Git vs Scion at a Glance</h2>
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Aspect</th>
                                <th>Git</th>
                                <th>Scion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Model</td>
                                <td>Distributed — every clone is a complete repository</td>
                                <td>Centralized — one authoritative service</td>
                            </tr>
                            <tr>
                                <td>Works offline?</td>
                                <td>Yes, fully</td>
                                <td>No — clients are assumed to be always online</td>
                            </tr>
                            <tr>
                                <td>Where commits, merges, and rebases happen</td>
                                <td>On your machine, then pushed</td>
                                <td>On the server — nothing to push</td>
                            </tr>
                            <tr>
                                <td>What a commit records</td>
                                <td>A pointer to a full-project tree</td>
                                <td>Files changed relative to the first parent</td>
                            </tr>
                            <tr>
                                <td>History questions (log, blame)</td>
                                <td>Computed locally from the full history</td>
                                <td>Answered by the server from derived-data indexes</td>
                            </tr>
                            <tr>
                                <td>Fetching</td>
                                <td>Negotiated packfile per request</td>
                                <td>Individual objects by hash, served from any cache</td>
                            </tr>
                            <tr>
                                <td>Working copy</td>
                                <td>Full by default; sparse is opt-in</td>
                                <td>Optional, sparse or virtual by design</td>
                            </tr>
                            <tr>
                                <td>Branches</td>
                                <td>Cheap and everywhere</td>
                                <td>Discouraged except <code>main</code> and releases</td>
                            </tr>
                            <tr>
                                <td>Repository maintenance</td>
                                <td>Needed (<code>git gc</code>, repacking)</td>
                                <td>None on clients or caches</td>
                            </tr>
                            <tr>
                                <td>Availability</td>
                                <td>Open source, used everywhere</td>
                                <td>Internal to Anthropic only</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* ── SECTION 10 — RESULTS ── */}
                <section className="blog-section">
                    <h2>The Results</h2>
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>What Anthropic measured</th>
                                <th>Result after moving to Scion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Infrastructure CPU and memory</td>
                                <td><strong>200x smaller</strong> than the previous Git mirroring infrastructure</td>
                            </tr>
                            <tr>
                                <td>Code checkouts for CI and research jobs</td>
                                <td><strong>Two orders of magnitude faster</strong> — seconds instead of minutes</td>
                            </tr>
                            <tr>
                                <td>CI capacity</td>
                                <td><strong>25% CPU capacity win</strong> in CI alone</td>
                            </tr>
                            <tr>
                                <td>Cache hit rate</td>
                                <td><strong>Over 99%</strong> at every tier</td>
                            </tr>
                            <tr>
                                <td>Repository maintenance</td>
                                <td>None needed on clients or caches</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>How a seven-person team pulled it off</h3>
                    <p>
                        A team of seven built Scion and a new code review tool called Antique, and fully migrated the
                        monorepo off Git in five months — while daily merges grew more than tenfold. The post describes
                        building Scion with Claude writing code, with engineers spending more of their time judging design
                        intent and saying &quot;no&quot; to over-engineered solutions, and with AI-written code backed by
                        heavy testing, fuzzing, and simulation.
                    </p>

                    <h3>Standing on the shoulders of Piper and Sapling</h3>
                    <p>
                        None of these ideas came from nowhere, and Anthropic says so. It credits Google&apos;s Piper and
                        Meta&apos;s Sapling — in particular Sapling&apos;s server, Mononoke, which pioneered many of the
                        techniques Scion uses, including its Bonsai data model. Large companies have run centralized, server-heavy
                        source control for giant monorepos for years. What changed is that AI agents pushed a much
                        younger company into that league in a matter of months.
                    </p>
                </section>

                {/* ── SECTION 11 — WHAT IT MEANS ── */}
                <section className="blog-section">
                    <h2>What This Means for Git Users</h2>
                    <p>
                        For almost everyone: nothing changes. Anthropic is explicit that Scion &quot;is by no means a
                        suitable replacement for git for general use,&quot; and that its concepts really only make sense
                        for truly enormous monorepos, with either tens of thousands of engineers or swarms of agents.
                        Scion is not released, and Anthropic says it would be difficult to offer it in a form that is
                        broadly useful to other organizations.
                    </p>
                    <p>
                        What Anthropic is sharing is the ideas. It suggests Git platforms could offer comprehensive
                        server-side RPCs like Scion&apos;s — perhaps standardized across forges — and that Git&apos;s
                        negotiation protocol and its sparse and shallow features could evolve, and says it hopes to
                        partner with GitHub, GitLab, and the open-source community on this. Nothing concrete has been
                        announced yet, but if it happens, it will arrive as improvements to Git rather than a
                        replacement for it.
                    </p>

                    <h3>Working with a large Git repository today?</h3>
                    <p>
                        Git already ships with tools built on some of the same ideas — fetching less, checking out less,
                        and deferring work until it is needed:
                    </p>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Partial clone: download file contents only when they are needed`}</span>{`
`}<span className="cli-cmd">{`git clone --filter=blob:none <url>`}</span>{`

`}<span className="cli-comment">{`# Sparse checkout: keep only the folders you work on in your working copy`}</span>{`
`}<span className="cli-cmd">{`git sparse-checkout set src/app docs`}</span>{`

`}<span className="cli-comment">{`# Shallow clone: skip old history entirely (handy for CI)`}</span>{`
`}<span className="cli-cmd">{`git clone --depth 1 <url>`}</span>{`

`}<span className="cli-comment">{`# Scalar (bundled with Git 2.38+): partial clone + sparse checkout + background maintenance`}</span>{`
`}<span className="cli-cmd">{`scalar clone <url>`}</span>
                        </pre>
                    </div>

                    <div className="tip-box">
                        <span className="tip-label">💡 The takeaway</span>
                        Scion is a glimpse of what source control looks like when most of the &quot;developers&quot; are
                        machines. For teams of people working on normal-sized repositories, Git&apos;s distributed design
                        is still the right one — and every Git tool you use, from the command line to a GUI like
                        LithiumGit, keeps working exactly as before.
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <dl>
                        {faqs.map((faq, i) => (
                            <div key={i} className="faq-item">
                                <dt><strong>{faq.q}</strong></dt>
                                <dd>{faq.a}</dd>
                            </div>
                        ))}
                    </dl>
                </section>

            </div>
        </main>
    );
}
