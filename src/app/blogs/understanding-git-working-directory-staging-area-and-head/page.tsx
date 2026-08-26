import { Config } from '../../../config';
import { IMetadataParams } from '../../../lib/interfaces';
import { UiUtils } from '../../../lib/utilities/UiUtils';
import '../../styles/blogs/working_directory_staging_area_head.scss';

const PAGE_URL = "https://lithiumgit.com/blogs/understanding-git-working-directory-staging-area-and-head";
const DATE_PUBLISHED = "2026-08-26";
const DATE_MODIFIED = "2026-08-26";
const CURRENT_YEAR = new Date().getFullYear();

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "headline": `Understanding Git's Working Directory, Staging Area, and HEAD (${CURRENT_YEAR})`,
    "description": "A clear explanation of Git's three trees — the working directory, the staging area (index), and HEAD — how every common Git command moves content between them, and how to read git status and git diff correctly.",
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
    "articleSection": "Git Fundamentals",
    "keywords": "git working directory, git staging area, git index, git HEAD, git three trees, git status explained, git diff staged, LithiumGit",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lithiumgit.com" },
        { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://lithiumgit.com/blogs" },
        { "@type": "ListItem", "position": 3, "name": "Working Directory, Staging Area, and HEAD", "item": PAGE_URL },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the difference between the working directory, the staging area, and HEAD in Git?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The working directory is the set of actual files on your disk that you edit with your editor. The staging area (also called the index) is a snapshot of what your next commit will contain, stored in the .git/index file. HEAD is a pointer to the commit at the tip of your current branch, representing the last committed snapshot. Content moves right with git add and git commit, and left with git restore."
            }
        },
        {
            "@type": "Question",
            "name": "Is the staging area the same thing as the Git index?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. The staging area, the index, and the cache are three names for the same thing: the binary file at .git/index that records the exact content and metadata of every path that will go into your next commit. This is why some Git commands say 'staged' while flags are named --cached."
            }
        },
        {
            "@type": "Question",
            "name": "What exactly does HEAD point to in Git?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "HEAD is normally a symbolic reference to a branch, not directly to a commit. The file .git/HEAD contains a line like 'ref: refs/heads/main', and that branch file contains the commit hash. When HEAD points straight at a commit hash instead of a branch, you are in a detached HEAD state."
            }
        },
        {
            "@type": "Question",
            "name": "Why does git diff show nothing after I run git add?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Plain git diff compares the working directory against the staging area. Once you stage a file, those two are identical, so there is nothing to report. Use git diff --staged to compare the staging area against HEAD, or git diff HEAD to compare the working directory against the last commit."
            }
        },
        {
            "@type": "Question",
            "name": "Why does the same file appear under both 'Changes to be committed' and 'Changes not staged for commit'?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Because you staged the file and then edited it again. The version in the staging area differs from HEAD, which puts it under 'Changes to be committed', and the version on disk now differs from the staging area, which also puts it under 'Changes not staged for commit'. Committing now would record the staged version, not what is on disk."
            }
        },
        {
            "@type": "Question",
            "name": "What does the staging area actually give me?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "It lets you build a commit deliberately instead of committing whatever happens to be on disk. You can stage part of a file with git add -p, split one messy editing session into several focused commits, and review exactly what is about to be recorded with git diff --staged before you commit."
            }
        },
        {
            "@type": "Question",
            "name": "Does git commit -a skip the staging area?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "It does not remove the staging area, it just fills it for you automatically. git commit -a stages every modification and deletion to already-tracked files, then commits. Untracked files are still ignored, so a brand-new file will not be included unless you git add it first."
            }
        }
    ]
};

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args, "blogs/understanding-git-working-directory-staging-area-and-head");
    data.title = `Git Working Directory, Staging Area, and HEAD Explained (${CURRENT_YEAR})`;
    data.description = `Most Git confusion comes from not knowing which of Git's three areas a command touches. Learn what the working directory, staging area (index), and HEAD really are, and how add, commit, restore, reset, and diff move content between them.`;
    data.keywords = `git working directory, git staging area, git index, git HEAD, git three trees, git status explained, git diff vs git diff --staged, what is git index, what does HEAD point to, detached HEAD, git add explained, unstage file git, git fundamentals, LithiumGit, git GUI client`;
    data.openGraph = {
        ...data.openGraph,
        title: `Git Working Directory, Staging Area, and HEAD Explained (${CURRENT_YEAR})`,
        description: `Git's three trees, explained clearly: what the working directory, staging area, and HEAD each hold, and which one every common Git command touches.`,
        type: 'article',
        url: PAGE_URL,
        images: [
            {
                url: 'https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png',
                width: 512,
                height: 512,
                alt: 'LithiumGit — Git Working Directory, Staging Area, and HEAD Guide',
            },
        ],
        // @ts-ignore
        publishedTime: DATE_PUBLISHED,
        modifiedTime: DATE_MODIFIED,
        section: 'Git Fundamentals',
        tags: ['git working directory', 'git staging area', 'git index', 'git HEAD', 'git tutorial', 'version control', 'LithiumGit'],
    };
    (data as any).twitter = {
        card: 'summary_large_image',
        title: `Git Working Directory, Staging Area, and HEAD Explained (${CURRENT_YEAR})`,
        description: `Learn Git's three trees — working directory, staging area, and HEAD — and stop guessing what add, commit, restore, reset, and diff actually do.`,
        images: ['https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png'],
    };
    (data as any).robots = { index: true, follow: true, googleBot: { index: true, follow: true } };
    return data;
}

export default function GitThreeTrees() {
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
                    <h1>Understanding Git&apos;s Working Directory, Staging Area, and HEAD</h1>
                    <p className="blog-meta">Published <time dateTime={DATE_PUBLISHED}>{DATE_PUBLISHED}</time> &nbsp;·&nbsp; LithiumGit Team &nbsp;·&nbsp; 10 min read</p>
                </div>

                <p className="blog-intro">
                    Almost every &quot;why did Git do that?&quot; moment traces back to the same gap: not knowing{' '}
                    <strong>which of Git&apos;s three areas a command touches</strong>. Why does{' '}
                    <code>git diff</code> go silent right after you run <code>git add</code>? Why does the same file
                    show up twice in <code>git status</code>? Why does <code>git reset --soft</code> feel completely
                    different from <code>git reset --hard</code>? Once you can picture the{' '}
                    <strong>working directory</strong>, the <strong>staging area</strong>, and{' '}
                    <strong>HEAD</strong> as three separate snapshots of your project, all of those answers become
                    obvious — and they stay obvious for every Git command you meet later.
                </p>

                {/* ── SECTION 1 — THE THREE AREAS ── */}
                <section className="blog-section">
                    <h2>The Three Areas in One Picture</h2>
                    <p>
                        Git does not store one copy of your project — it juggles three. Each one holds a complete
                        snapshot of every tracked file, and at any moment they can disagree with one another.
                        Git&apos;s own documentation calls these the <strong>three trees</strong>.
                    </p>

                    <div className="concept-box">
                        <strong>1. Working Directory</strong>
                        The real files on your disk — the ones your editor opens and your compiler reads. This is the
                        only area you can change directly, and the only one where an idea can be lost forever.
                    </div>
                    <div className="concept-box">
                        <strong>2. Staging Area (the index)</strong>
                        A draft of your <em>next</em> commit. It is not a list of filenames — it is a full snapshot,
                        stored in the binary file <code>.git/index</code>. Nothing reaches history without passing
                        through here first.
                    </div>
                    <div className="concept-box">
                        <strong>3. HEAD</strong>
                        A pointer to the commit at the tip of your current branch — in other words, the snapshot you
                        committed <em>last</em>. HEAD is Git&apos;s answer to &quot;where am I right now?&quot;
                    </div>

                    <div className="blog-diagram">
                        <svg viewBox="0 0 960 260" role="img" aria-label="Diagram of Git's three areas: the working directory, the staging area, and HEAD, with git add and git commit moving content to the right and git restore moving content back to the left">
                            <defs>
                                <marker id="dgArrow1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                    <path className="dg-marker" d="M0,0 L10,5 L0,10 z" />
                                </marker>
                            </defs>

                            {/* Working directory */}
                            <rect className="dg-box" x="20" y="40" width="230" height="200" rx="10" />
                            <text className="dg-title" x="135" y="68" textAnchor="middle">Working Directory</text>
                            <text className="dg-sub" x="135" y="87" textAnchor="middle">the files on your disk</text>
                            <line className="dg-rule" x1="38" y1="100" x2="232" y2="100" />
                            <text className="dg-file" x="40" y="128">api.ts</text>
                            <text className="dg-state" x="230" y="128" textAnchor="end">modified</text>
                            <text className="dg-file" x="40" y="154">app.ts</text>
                            <text className="dg-state" x="230" y="154" textAnchor="end">modified</text>
                            <text className="dg-file" x="40" y="180">notes.md</text>
                            <text className="dg-state" x="230" y="180" textAnchor="end">untracked</text>

                            {/* Staging area */}
                            <rect className="dg-box" x="365" y="40" width="230" height="200" rx="10" />
                            <text className="dg-title" x="480" y="68" textAnchor="middle">Staging Area</text>
                            <text className="dg-sub" x="480" y="87" textAnchor="middle">the .git/index file</text>
                            <line className="dg-rule" x1="383" y1="100" x2="577" y2="100" />
                            <text className="dg-file" x="385" y="128">api.ts</text>
                            <text className="dg-state" x="575" y="128" textAnchor="end">staged</text>
                            <text className="dg-note" x="480" y="176" textAnchor="middle">your next commit,</text>
                            <text className="dg-note" x="480" y="192" textAnchor="middle">as it stands right now</text>

                            {/* HEAD */}
                            <rect className="dg-box" x="710" y="40" width="230" height="200" rx="10" />
                            <text className="dg-title" x="825" y="68" textAnchor="middle">HEAD</text>
                            <text className="dg-sub" x="825" y="87" textAnchor="middle">your last commit</text>
                            <line className="dg-rule" x1="728" y1="100" x2="922" y2="100" />
                            <text className="dg-file" x="730" y="128">api.ts</text>
                            <text className="dg-file" x="730" y="154">app.ts</text>
                            <text className="dg-note" x="825" y="192" textAnchor="middle">committed &amp; immutable</text>

                            {/* Working directory ↔ staging area */}
                            <text className="dg-cmd" x="307" y="118" textAnchor="middle">git add</text>
                            <path className="dg-arrow" d="M256,130 H356" markerEnd="url(#dgArrow1)" />
                            <path className="dg-arrow" d="M359,185 H259" markerEnd="url(#dgArrow1)" />
                            <text className="dg-cmd" x="307" y="205" textAnchor="middle">git restore</text>

                            {/* Staging area ↔ HEAD */}
                            <text className="dg-cmd" x="652" y="118" textAnchor="middle">git commit</text>
                            <path className="dg-arrow" d="M601,130 H701" markerEnd="url(#dgArrow1)" />
                            <path className="dg-arrow" d="M704,185 H604" markerEnd="url(#dgArrow1)" />
                            <text className="dg-cmd" x="652" y="205" textAnchor="middle">git restore</text>
                            <text className="dg-cmd" x="652" y="222" textAnchor="middle">--staged</text>
                        </svg>
                        <p className="diagram-caption">
                            Content flows right to become permanent, and left to be thrown away. Every arrow
                            overwrites its destination with the contents of its source.
                        </p>
                    </div>

                    <div className="tip-box">
                        <span className="tip-label">💡 The one rule to remember</span>
                        Rightward commands (<code>git add</code>, <code>git commit</code>) promote your work toward
                        permanence. Leftward commands (<code>git restore</code>) overwrite the left area with whatever
                        the right area holds — which is why they can destroy work that only ever existed on the left.
                    </div>
                </section>

                {/* ── SECTION 2 — WORKING DIRECTORY ── */}
                <section className="blog-section">
                    <h2>The Working Directory — Where You Actually Work</h2>
                    <p>
                        Your working directory is simply your project folder: <code>src/</code>,{' '}
                        <code>package.json</code>, everything you can see in your file explorer. Git checks it out for
                        you when you switch branches, but after that it belongs to you and your editor. Git does not
                        watch it, does not lock it, and does not back it up.
                    </p>
                    <p>
                        The one folder that is <em>not</em> part of your working directory is <code>.git/</code>. That
                        is the repository itself: object database, refs, and the index. Delete <code>.git/</code> and
                        you still have your files but no history; delete your files and <code>.git/</code> can give
                        every committed version back.
                    </p>

                    <h3>Tracked, modified, staged, untracked</h3>
                    <p>
                        Git sorts every path in your working directory into one of a few states, and{' '}
                        <code>git status</code> is just a report on that sorting:
                    </p>
                    <ul>
                        <li><strong>Untracked</strong> — the file exists on disk but has never been added to the index or a commit. Git knows nothing about its contents.</li>
                        <li><strong>Unmodified</strong> — the file on disk is byte-identical to the version in HEAD. Git stays quiet about it.</li>
                        <li><strong>Modified</strong> — the file on disk differs from the staged version. The change exists only in your working directory.</li>
                        <li><strong>Staged</strong> — the version in the index differs from HEAD. The change is queued for the next commit.</li>
                    </ul>

                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# What differs between the working directory and the staging area?`}</span>{`
`}<span className="cli-cmd">{`git diff`}</span>{`

`}<span className="cli-comment">{`# List every file Git is currently tracking (i.e. present in the index)`}</span>{`
`}<span className="cli-cmd">{`git ls-files`}</span>{`

`}<span className="cli-comment">{`# Compact machine-readable status, including untracked files`}</span>{`
`}<span className="cli-cmd">{`git status --porcelain`}</span>
                        </pre>
                    </div>

                    <div className="tip-box">
                        <span className="tip-label">⚠️ The only area with no safety net</span>
                        A commit can be recovered from the reflog. A staged snapshot can often be recovered from
                        dangling blobs. But a working-directory edit that was never staged or committed has no copy
                        anywhere in <code>.git/</code> — <code>git restore</code> and{' '}
                        <code>git reset --hard</code> erase it for good.
                    </div>
                </section>

                {/* ── SECTION 3 — STAGING AREA ── */}
                <section className="blog-section">
                    <h2>The Staging Area — Your Commit, Still in Draft</h2>
                    <p>
                        The staging area is the part of Git most other version-control systems do not have, and the
                        part people most often try to route around. It is worth understanding on its own terms,
                        because it is the reason Git can produce a clean history out of a messy afternoon of editing.
                    </p>
                    <p>
                        Three names refer to the exact same thing: <strong>staging area</strong>,{' '}
                        <strong>index</strong>, and <strong>cache</strong>. That is why one command says{' '}
                        <code>--staged</code> and another says <code>--cached</code> — historical accident, one
                        concept.
                    </p>

                    <h3>It is a snapshot, not a to-do list</h3>
                    <p>
                        A common misconception is that <code>git add</code> marks a file to be included later. It does
                        not. <code>git add</code> reads the file&apos;s current contents, writes them into Git&apos;s
                        object database as a blob, and records that blob in <code>.git/index</code>. The staged
                        content is frozen at the moment you ran <code>add</code>.
                    </p>
                    <p>
                        This is exactly why editing a file after staging it makes it appear twice in{' '}
                        <code>git status</code> — and why committing then records the older, staged version rather
                        than what is on disk.
                    </p>

                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Stage the current contents of a file`}</span>{`
`}<span className="cli-cmd">{`git add src/api.ts`}</span>{`

`}<span className="cli-comment">{`# Stage only selected hunks — the real payoff of having a staging area`}</span>{`
`}<span className="cli-cmd">{`git add -p src/api.ts`}</span>{`

`}<span className="cli-comment">{`# Review exactly what you are about to commit, before you commit it`}</span>{`
`}<span className="cli-cmd">{`git diff --staged`}</span>{`

`}<span className="cli-comment">{`# Inspect the index itself: mode, blob hash, stage number, path`}</span>{`
`}<span className="cli-cmd">{`git ls-files --stage`}</span>{`

`}<span className="cli-comment">{`# Unstage a file but keep your edits on disk`}</span>{`
`}<span className="cli-cmd">{`git restore --staged src/api.ts`}</span>
                        </pre>
                    </div>

                    <h3>Why bother staging at all?</h3>
                    <ul>
                        <li><strong>Focused commits from unfocused work</strong> — fix a bug and a typo in one session, then commit them separately with <code>git add -p</code>.</li>
                        <li><strong>A review step you control</strong> — <code>git diff --staged</code> shows precisely what will be recorded, so debug prints and stray <code>console.log</code> lines get caught before they enter history.</li>
                        <li><strong>Keeping local-only files out</strong> — scratch scripts and experiments can stay in the working directory indefinitely without ever being committed.</li>
                        <li><strong>Conflict resolution</strong> — during a merge the index holds multiple stages of a conflicted file, and <code>git add</code> is how you tell Git &quot;this version is resolved.&quot;</li>
                    </ul>

                    <div className="tip-box">
                        <span className="tip-label">💡 About git commit -a</span>
                        <code>git commit -a</code> does not bypass the staging area — it stages for you, then commits.
                        It also only picks up modifications and deletions to <strong>already-tracked</strong> files, so
                        a brand-new file is silently left out unless you <code>git add</code> it first.
                    </div>
                </section>

                {/* ── SECTION 4 — HEAD ── */}
                <section className="blog-section">
                    <h2>HEAD — A Pointer, Not a Place</h2>
                    <p>
                        HEAD answers one question: <em>which commit is my next commit&apos;s parent?</em> Almost always
                        it does so indirectly. <code>.git/HEAD</code> is a small text file, and its contents are
                        usually not a commit hash at all but a reference to a branch:
                    </p>

                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-cmd">{`cat .git/HEAD`}</span>{`
ref: refs/heads/main

`}<span className="cli-cmd">{`cat .git/refs/heads/main`}</span>{`
3a9f1c27b4e8d0a5f1c9b7e2d4a6c8e0f2b4d6a8

`}<span className="cli-comment">{`# The same chain, via plumbing commands`}</span>{`
`}<span className="cli-cmd">{`git symbolic-ref HEAD`}</span>{`      `}<span className="cli-comment">{`# -> refs/heads/main`}</span>{`
`}<span className="cli-cmd">{`git rev-parse HEAD`}</span>{`         `}<span className="cli-comment">{`# -> 3a9f1c27b4e8...`}</span>
                        </pre>
                    </div>

                    <p>
                        So the full chain is <strong>HEAD → branch → commit</strong>. This indirection is what makes
                        committing work: when you commit, Git creates the new commit and then advances{' '}
                        <em>the branch</em> that HEAD names. HEAD itself never changes — it still says{' '}
                        <code>ref: refs/heads/main</code>, and <code>main</code> now points somewhere new.
                    </p>

                    <div className="blog-diagram">
                        <svg viewBox="0 0 960 400" role="img" aria-label="Diagram comparing an attached HEAD, which points to the main branch which points to commit C3, with a detached HEAD, which points directly at commit C2">
                            <defs>
                                <marker id="dgArrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                    <path className="dg-marker" d="M0,0 L10,5 L0,10 z" />
                                </marker>
                            </defs>

                            {/* Row 1 — attached HEAD */}
                            <text className="dg-row-label" x="20" y="144">Normal state</text>
                            <text className="dg-sub" x="20" y="164">HEAD → main → C3</text>

                            <circle className="dg-node" cx="300" cy="150" r="28" />
                            <text className="dg-node-label" x="300" y="155" textAnchor="middle">C1</text>
                            <circle className="dg-node" cx="500" cy="150" r="28" />
                            <text className="dg-node-label" x="500" y="155" textAnchor="middle">C2</text>
                            <circle className="dg-node" cx="700" cy="150" r="28" />
                            <text className="dg-node-label" x="700" y="155" textAnchor="middle">C3</text>

                            <path className="dg-arrow" d="M670,150 H534" markerEnd="url(#dgArrow2)" />
                            <path className="dg-arrow" d="M470,150 H334" markerEnd="url(#dgArrow2)" />

                            <rect className="dg-ref" x="655" y="62" width="90" height="32" rx="6" />
                            <text className="dg-ref-label" x="700" y="83" textAnchor="middle">main</text>
                            <path className="dg-arrow" d="M700,94 V118" markerEnd="url(#dgArrow2)" />

                            <rect className="dg-ref" x="655" y="8" width="90" height="32" rx="6" />
                            <text className="dg-ref-label" x="700" y="29" textAnchor="middle">HEAD</text>
                            <path className="dg-arrow" d="M700,40 V58" markerEnd="url(#dgArrow2)" />

                            <path className="dg-divider" d="M20,225 H940" />

                            {/* Row 2 — detached HEAD */}
                            <text className="dg-row-label" x="20" y="334">Detached HEAD</text>
                            <text className="dg-sub" x="20" y="354">HEAD → C2 directly</text>

                            <circle className="dg-node" cx="300" cy="340" r="28" />
                            <text className="dg-node-label" x="300" y="345" textAnchor="middle">C1</text>
                            <circle className="dg-node" cx="500" cy="340" r="28" />
                            <text className="dg-node-label" x="500" y="345" textAnchor="middle">C2</text>
                            <circle className="dg-node" cx="700" cy="340" r="28" />
                            <text className="dg-node-label" x="700" y="345" textAnchor="middle">C3</text>

                            <path className="dg-arrow" d="M670,340 H534" markerEnd="url(#dgArrow2)" />
                            <path className="dg-arrow" d="M470,340 H334" markerEnd="url(#dgArrow2)" />

                            <rect className="dg-ref" x="655" y="252" width="90" height="32" rx="6" />
                            <text className="dg-ref-label" x="700" y="273" textAnchor="middle">main</text>
                            <path className="dg-arrow" d="M700,284 V308" markerEnd="url(#dgArrow2)" />

                            <rect className="dg-ref" x="455" y="252" width="90" height="32" rx="6" />
                            <text className="dg-ref-label" x="500" y="273" textAnchor="middle">HEAD</text>
                            <path className="dg-arrow" d="M500,284 V308" markerEnd="url(#dgArrow2)" />
                        </svg>
                        <p className="diagram-caption">
                            Commit arrows point backward to parents. Normally HEAD points at a branch; when it points
                            straight at a commit, HEAD is detached.
                        </p>
                    </div>

                    <h3>Detached HEAD, demystified</h3>
                    <p>
                        Run <code>git checkout 3a9f1c2</code> and Git writes the raw hash into{' '}
                        <code>.git/HEAD</code> instead of a <code>ref:</code> line. You can look around and even
                        commit, but those commits have no branch pointing at them — move away and they become
                        unreachable, which is exactly what the alarming warning message is trying to tell you. The fix
                        is never dramatic: <code>git switch -c my-branch</code> creates a branch at your current
                        position, or <code>git switch main</code> walks away.
                    </p>

                    <h3>HEAD-relative shorthand</h3>
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Notation</th>
                                <th>Means</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>HEAD</code></td>
                                <td>The commit at the tip of the current branch</td>
                            </tr>
                            <tr>
                                <td><code>HEAD~1</code> / <code>HEAD~</code></td>
                                <td>One commit back along the first-parent line</td>
                            </tr>
                            <tr>
                                <td><code>HEAD~3</code></td>
                                <td>Three commits back along the first-parent line</td>
                            </tr>
                            <tr>
                                <td><code>HEAD^</code></td>
                                <td>The first parent of HEAD (same as <code>HEAD~1</code>)</td>
                            </tr>
                            <tr>
                                <td><code>HEAD^2</code></td>
                                <td>The <em>second</em> parent — only meaningful on a merge commit</td>
                            </tr>
                            <tr>
                                <td><code>HEAD@&#123;2&#125;</code></td>
                                <td>Where HEAD pointed two moves ago, read from the reflog</td>
                            </tr>
                            <tr>
                                <td><code>ORIG_HEAD</code></td>
                                <td>Where HEAD was before the last risky operation (merge, rebase, reset)</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="tip-box">
                        <span className="tip-label">💡 ~ versus ^</span>
                        <code>~</code> walks <em>backward</em> through generations; <code>^</code> chooses{' '}
                        <em>which parent</em> at one commit. On a linear history they are interchangeable. On a merge
                        commit, <code>HEAD^1</code> is the branch you merged into and <code>HEAD^2</code> is the
                        branch you merged in.
                    </div>
                </section>

                {/* ── SECTION 5 — READING GIT STATUS ── */}
                <section className="blog-section">
                    <h2>Reading git status as Three Comparisons</h2>
                    <p>
                        <code>git status</code> looks like a list of files. It is really the result of two diffs and
                        one filesystem scan, and its section headings map exactly onto the three areas:
                    </p>

                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-cmd">{`git status`}</span>{`

On branch main

Changes to be committed:        `}<span className="cli-comment">{`# staging area vs HEAD`}</span>{`
        modified:   src/api.ts

Changes not staged for commit:  `}<span className="cli-comment">{`# working directory vs staging area`}</span>{`
        modified:   src/api.ts
        modified:   src/app.ts

Untracked files:                `}<span className="cli-comment">{`# on disk, in neither area`}</span>{`
        notes.md`}
                        </pre>
                    </div>

                    <p>
                        Note that <code>src/api.ts</code> appears in the first two sections at once. That is not a bug
                        and it is not ambiguity — it is precise. Its staged snapshot differs from HEAD, and its
                        on-disk contents differ from that staged snapshot. It was staged, then edited again.
                    </p>
                    <div className="tip-box">
                        <span className="tip-label">⚠️ What would actually get committed</span>
                        If you run <code>git commit</code> right now, only the staged version of{' '}
                        <code>src/api.ts</code> is recorded — the later edits stay uncommitted, and{' '}
                        <code>src/app.ts</code> is not included at all. Run <code>git add</code> again first if you
                        want the newest contents.
                    </div>
                </section>

                {/* ── SECTION 6 — THE THREE DIFFS ── */}
                <section className="blog-section">
                    <h2>The Three Diffs — Same Command, Different Pairs</h2>
                    <p>
                        With three areas there are three pairs to compare, and <code>git diff</code> gives you one
                        invocation for each. This is the single most useful payoff of the mental model, and the answer
                        to &quot;why does <code>git diff</code> show nothing?&quot;
                    </p>

                    <div className="blog-diagram">
                        <svg viewBox="0 0 960 300" role="img" aria-label="Diagram showing git diff compares the working directory to the staging area, git diff --staged compares the staging area to HEAD, and git diff HEAD compares the working directory to HEAD">
                            <defs>
                                <marker id="dgArrow3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                                    <path className="dg-marker" d="M0,0 L10,5 L0,10 z" />
                                </marker>
                            </defs>

                            <rect className="dg-box" x="20" y="16" width="230" height="60" rx="10" />
                            <text className="dg-title" x="135" y="53" textAnchor="middle">Working Directory</text>
                            <rect className="dg-box" x="365" y="16" width="230" height="60" rx="10" />
                            <text className="dg-title" x="480" y="53" textAnchor="middle">Staging Area</text>
                            <rect className="dg-box" x="710" y="16" width="230" height="60" rx="10" />
                            <text className="dg-title" x="825" y="53" textAnchor="middle">HEAD</text>

                            <path className="dg-guide" d="M135,76 V275" />
                            <path className="dg-guide" d="M480,76 V275" />
                            <path className="dg-guide" d="M825,76 V275" />

                            <text className="dg-cmd" x="307" y="126" textAnchor="middle">git diff</text>
                            <path className="dg-arrow" d="M135,140 H480" markerStart="url(#dgArrow3)" markerEnd="url(#dgArrow3)" />

                            <text className="dg-cmd" x="652" y="191" textAnchor="middle">git diff --staged</text>
                            <path className="dg-arrow" d="M480,205 H825" markerStart="url(#dgArrow3)" markerEnd="url(#dgArrow3)" />

                            <text className="dg-cmd" x="480" y="256" textAnchor="middle">git diff HEAD</text>
                            <path className="dg-arrow" d="M135,270 H825" markerStart="url(#dgArrow3)" markerEnd="url(#dgArrow3)" />
                        </svg>
                        <p className="diagram-caption">
                            Three areas, three pairs, three diff invocations — each one compares a different pair.
                        </p>
                    </div>

                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Command</th>
                                <th>Compares</th>
                                <th>Answers</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>git diff</code></td>
                                <td>Working directory ↔ staging area</td>
                                <td>&quot;What have I changed but not staged?&quot;</td>
                            </tr>
                            <tr>
                                <td><code>git diff --staged</code></td>
                                <td>Staging area ↔ HEAD</td>
                                <td>&quot;What exactly will my next commit record?&quot;</td>
                            </tr>
                            <tr>
                                <td><code>git diff HEAD</code></td>
                                <td>Working directory ↔ HEAD</td>
                                <td>&quot;What have I changed since my last commit, staged or not?&quot;</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                        So when <code>git diff</code> prints nothing right after <code>git add</code>, Git is not
                        broken and your change is not lost. The working directory and the staging area now match, so
                        there is genuinely no difference between them. Ask a different pair with{' '}
                        <code>git diff --staged</code> and your change reappears.
                    </p>
                </section>

                {/* ── SECTION 7 — COMMAND MAP ── */}
                <section className="blog-section">
                    <h2>Which Areas Does Each Command Touch?</h2>
                    <p>
                        Every everyday Git command can be described as &quot;copy from area X into area Y.&quot; Once
                        you can place a command on this table, its behaviour stops being something you memorise.
                    </p>

                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Command</th>
                                <th>Working directory</th>
                                <th>Staging area</th>
                                <th>HEAD / branch</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>git add &lt;file&gt;</code></td>
                                <td>Unchanged</td>
                                <td>Overwritten from working directory</td>
                                <td>Unchanged</td>
                            </tr>
                            <tr>
                                <td><code>git commit</code></td>
                                <td>Unchanged</td>
                                <td>Unchanged</td>
                                <td>New commit; branch advances</td>
                            </tr>
                            <tr>
                                <td><code>git restore &lt;file&gt;</code></td>
                                <td>Overwritten from staging area</td>
                                <td>Unchanged</td>
                                <td>Unchanged</td>
                            </tr>
                            <tr>
                                <td><code>git restore --staged &lt;file&gt;</code></td>
                                <td>Unchanged</td>
                                <td>Overwritten from HEAD</td>
                                <td>Unchanged</td>
                            </tr>
                            <tr>
                                <td><code>git reset --soft HEAD~1</code></td>
                                <td>Unchanged</td>
                                <td>Unchanged</td>
                                <td>Branch moves back one commit</td>
                            </tr>
                            <tr>
                                <td><code>git reset HEAD~1</code> (mixed)</td>
                                <td>Unchanged</td>
                                <td>Overwritten from new HEAD</td>
                                <td>Branch moves back one commit</td>
                            </tr>
                            <tr>
                                <td><code>git reset --hard HEAD~1</code></td>
                                <td>Overwritten from new HEAD</td>
                                <td>Overwritten from new HEAD</td>
                                <td>Branch moves back one commit</td>
                            </tr>
                            <tr>
                                <td><code>git switch &lt;branch&gt;</code></td>
                                <td>Updated to match target branch</td>
                                <td>Updated to match target branch</td>
                                <td>Points at the new branch</td>
                            </tr>
                            <tr>
                                <td><code>git stash</code></td>
                                <td>Cleaned to match HEAD</td>
                                <td>Cleaned to match HEAD</td>
                                <td>Unchanged (changes saved aside)</td>
                            </tr>
                            <tr>
                                <td><code>git rm --cached &lt;file&gt;</code></td>
                                <td>Unchanged (file stays on disk)</td>
                                <td>Entry removed — file becomes untracked</td>
                                <td>Unchanged</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="tip-box">
                        <span className="tip-label">💡 Why reset has three flags</span>
                        <code>git reset</code> always moves the branch pointer. The flag simply decides how far
                        leftward the reset propagates: <code>--soft</code> stops at HEAD, <code>--mixed</code>{' '}
                        continues into the staging area, and <code>--hard</code> goes all the way into your working
                        directory. Same operation, three depths. Our{' '}
                        <a href="/blogs/3-ways-to-undo-in-git-and-only-one-is-safe-to-push" rel="noopener">
                            guide to reset, revert, and restore
                        </a>{' '}
                        covers that in detail.
                    </div>
                </section>

                {/* ── SECTION 8 — LITHIUMGIT ── */}
                <section className="blog-section">
                    <h2>Seeing the Three Areas in LithiumGit</h2>
                    <p>
                        A GUI helps here because it can show all three areas at once instead of one text report at a
                        time. In <a href="https://lithiumgit.com" rel="noopener">LithiumGit</a>, a free open-source
                        Git GUI client, the changes panel splits staged and unstaged entries into separate lists, so
                        the distinction the <code>git status</code> headings describe is visible at a glance rather
                        than inferred from indentation.
                    </p>
                    <ul>
                        <li><strong>Staged and unstaged, side by side</strong> — a file that appears in both lists is instantly recognisable as &quot;staged, then edited again.&quot;</li>
                        <li><strong>Diff against the right pair</strong> — selecting an unstaged entry diffs it against the index; selecting a staged entry diffs it against HEAD.</li>
                        <li><strong>Line-level staging</strong> — stage individual lines or hunks without hand-driving <code>git add -p</code>.</li>
                        <li><strong>HEAD in the graph</strong> — the interactive commit graph marks where HEAD currently sits, which makes a detached HEAD obvious instead of surprising.</li>
                    </ul>
                    <p>
                        The concepts are identical either way. A GUI just removes the need to keep all three snapshots
                        in your head while you work.
                    </p>
                </section>

                {/* ── SECTION 9 — GOTCHAS ── */}
                <section className="blog-section">
                    <h2>Five Gotchas That Suddenly Make Sense</h2>
                    <ul>
                        <li>
                            <strong>A file listed as both staged and unstaged.</strong> You staged it, then kept
                            editing. The index and your disk hold two different versions, and both differ from HEAD.
                        </li>
                        <li>
                            <strong><code>.gitignore</code> being ignored.</strong> Ignore rules only apply to
                            untracked paths. If a file is already in the index, Git keeps tracking it — you need{' '}
                            <code>git rm --cached &lt;file&gt;</code> to evict it from the staging area first.
                        </li>
                        <li>
                            <strong>An empty <code>git diff</code> on a real change.</strong> The change is staged, so
                            the working directory and the index agree. Use <code>git diff --staged</code>.
                        </li>
                        <li>
                            <strong><code>git commit -a</code> missing a new file.</strong> The <code>-a</code> flag
                            only auto-stages tracked files. An untracked file needs an explicit <code>git add</code>.
                        </li>
                        <li>
                            <strong>Committing on a detached HEAD and &quot;losing&quot; the commit.</strong> No
                            branch advanced, so nothing references your new commit once you switch away. Find it with{' '}
                            <code>git reflog</code> and attach a branch to it.
                        </li>
                    </ul>

                    <div className="tip-box">
                        <span className="tip-label">💡 A three-question habit</span>
                        Before running anything unfamiliar, ask: <strong>which areas does this read?</strong>{' '}
                        <strong>Which does it overwrite?</strong> <strong>Does anything it overwrites hold work that
                        exists nowhere else?</strong> If the answer to the third question is yes, commit or stash
                        first.
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <dl>
                        {[
                            {
                                q: "What is the difference between the working directory, the staging area, and HEAD in Git?",
                                a: "The working directory is the set of actual files on your disk that you edit. The staging area (also called the index) is a snapshot of what your next commit will contain, stored in the .git/index file. HEAD is a pointer to the commit at the tip of your current branch — the last committed snapshot. Content moves right with git add and git commit, and left with git restore."
                            },
                            {
                                q: "Is the staging area the same thing as the Git index?",
                                a: "Yes. The staging area, the index, and the cache are three names for the same thing: the binary file at .git/index that records the exact content and metadata of every path that will go into your next commit. That is why some commands say 'staged' while some flags are named --cached."
                            },
                            {
                                q: "What exactly does HEAD point to in Git?",
                                a: "HEAD is normally a symbolic reference to a branch rather than directly to a commit. The file .git/HEAD contains a line like 'ref: refs/heads/main', and that branch file contains the commit hash. When HEAD contains a raw commit hash instead, you are in a detached HEAD state."
                            },
                            {
                                q: "Why does git diff show nothing after I run git add?",
                                a: "Plain git diff compares the working directory against the staging area. Once you stage a file those two are identical, so there is nothing to report. Use git diff --staged to compare the staging area against HEAD, or git diff HEAD to compare the working directory against the last commit."
                            },
                            {
                                q: "Why does the same file appear under both 'Changes to be committed' and 'Changes not staged for commit'?",
                                a: "Because you staged the file and then edited it again. The staged version differs from HEAD, which puts it under 'Changes to be committed', and the version on disk now differs from the staged version, which also puts it under 'Changes not staged for commit'. Committing now would record the staged version, not what is on disk."
                            },
                            {
                                q: "What does the staging area actually give me?",
                                a: "It lets you build a commit deliberately instead of committing whatever happens to be on disk. You can stage part of a file with git add -p, split one messy editing session into several focused commits, and review exactly what is about to be recorded with git diff --staged before you commit."
                            },
                            {
                                q: "Does git commit -a skip the staging area?",
                                a: "No — it fills the staging area for you automatically, then commits. It stages every modification and deletion to already-tracked files only, so a brand-new untracked file will not be included unless you git add it first."
                            },
                            {
                                q: "Is the .git folder part of my working directory?",
                                a: "No. The .git folder is the repository itself: the object database, the refs, and the index. Your working directory is everything else in the project folder — the files you edit. Deleting .git leaves your files with no history; deleting your files leaves .git able to restore every committed version."
                            },
                            {
                                q: "What is the difference between HEAD~1 and HEAD^2?",
                                a: "HEAD~1 walks one generation back along the first-parent line. HEAD^2 selects the second parent of HEAD, which only exists on a merge commit. On a linear history HEAD~1 and HEAD^1 mean the same commit; on a merge commit HEAD^1 is the branch you merged into and HEAD^2 is the branch you merged in."
                            }
                        ].map((faq, i) => (
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
