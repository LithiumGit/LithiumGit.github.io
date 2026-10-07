import { IMetadataParams } from '../../../lib/interfaces';
import { UiUtils } from '../../../lib/utilities/UiUtils';
import '../../styles/blogs/danger_of_rebase_in_git.scss';

const PAGE_URL = "https://lithiumgit.com/blogs/the-danger-of-rebase-in-git";
const DATE_PUBLISHED = "2026-10-07";
const DATE_MODIFIED = "2026-10-07";
const CURRENT_YEAR = new Date().getFullYear();

const faqs = [
    {
        q: "Is git rebase dangerous?",
        a: "Rebase is safe on commits that exist only on your machine. It becomes dangerous on commits other people already have, because rebase does not move commits — it replaces them with new copies that have new hashes. Anyone still holding the originals ends up with diverged history, duplicate commits, or, after a force push, lost work."
    },
    {
        q: "Can I undo a git rebase?",
        a: "Yes. While a rebase is still in progress, git rebase --abort puts everything back the way it was before it started. Right after a rebase finishes, git reset --hard ORIG_HEAD moves the branch back. Later on, find the pre-rebase commit with git reflog show <branch> — it is usually <branch>@{1} — and reset to it. Rebased-away commits are kept for about 30 days by default."
    },
    {
        q: "Why does rebasing create duplicate commits?",
        a: "Rebased commits are new commits with new hashes, even when their changes are identical. If a teammate still has the original commits and merges the rebased branch into their copy, Git keeps both versions, so every change appears twice in the history."
    },
    {
        q: "What is the difference between git push --force and --force-with-lease?",
        a: "git push --force overwrites the remote branch no matter what is on it, which can delete commits other people pushed. git push --force-with-lease only overwrites the branch if it still points where your last fetch saw it, and rejects the push otherwise. Adding --force-if-includes also protects you when a background fetch updated your remote-tracking branch without you integrating the new commits."
    },
    {
        q: "Why are ours and theirs swapped during a git rebase?",
        a: "Rebase works by checking out the branch you are rebasing onto and replaying your commits on top of it one by one. So during a rebase, \"ours\" (Current changes) is the upstream branch plus any commits already replayed, and \"theirs\" (Incoming changes) is your own commit being replayed — the opposite of a merge."
    },
    {
        q: "What does git rebase --skip do?",
        a: "It drops the commit currently being replayed entirely, not just its conflicting parts. Only use it when that commit's changes are no longer needed, for example because the same change already exists on the branch you are rebasing onto."
    },
    {
        q: "Does git rebase change the commit author or date?",
        a: "Rebase keeps each commit's original author and author date, but the rebased copies get you as the committer, the current time as the commit date, and new hashes. Commit signatures are not carried over, so signed commits have to be re-signed — with your key — using git rebase --gpg-sign."
    },
];

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "headline": `The Danger of Rebase in Git — 7 Ways It Can Go Wrong (${CURRENT_YEAR})`,
    "description": "The real dangers of git rebase — duplicate commits, force pushes that erase a teammate's work, swapped conflict sides, untested commits — and how to recover with the reflog and rebase safely.",
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
    "articleSection": "Git Tutorials",
    "keywords": "git rebase dangers, is git rebase dangerous, undo git rebase, git rebase duplicate commits, git push force-with-lease, git rebase ours theirs, git reflog, LithiumGit",
    "wordCount": 3000,
    "inLanguage": "en-US",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lithiumgit.com" },
        { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://lithiumgit.com/blogs" },
        { "@type": "ListItem", "position": 3, "name": "The Danger of Rebase in Git", "item": PAGE_URL },
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
    const data = UiUtils.getCommonHeaderInfo(args, "blogs/the-danger-of-rebase-in-git");
    data.title = `The Danger of Rebase in Git — 7 Ways It Can Go Wrong (${CURRENT_YEAR})`;
    data.description = `Git rebase rewrites history, and that can duplicate commits, erase a teammate's work, or hide a bad conflict resolution. Learn the 7 real dangers of rebase, how to recover with the reflog, and how to rebase safely in ${CURRENT_YEAR}.`;
    data.keywords = `git rebase dangers, is git rebase dangerous, git rebase risks, undo git rebase, git rebase abort, git rebase duplicate commits, git push force vs force-with-lease, git force-if-includes, git rebase ours theirs swapped, git reflog recover rebase, git rebase skip, golden rule of rebasing, LithiumGit, git GUI client`;
    data.openGraph = {
        ...data.openGraph,
        title: `The Danger of Rebase in Git — 7 Ways It Can Go Wrong (${CURRENT_YEAR})`,
        description: `Duplicate commits, force pushes that erase a teammate's work, swapped conflict sides — what really goes wrong with git rebase and how to recover.`,
        type: 'article',
        url: PAGE_URL,
        images: [
            {
                url: 'https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png',
                width: 512,
                height: 512,
                alt: 'LithiumGit — The Danger of Rebase in Git',
            },
        ],
        // @ts-ignore
        publishedTime: DATE_PUBLISHED,
        modifiedTime: DATE_MODIFIED,
        section: 'Git Tutorials',
        tags: ['git rebase', 'git push --force', 'git reflog', 'git tutorial', 'version control', 'LithiumGit'],
    };
    (data as any).twitter = {
        card: 'summary_large_image',
        title: `The Danger of Rebase in Git — 7 Ways It Can Go Wrong (${CURRENT_YEAR})`,
        description: `What really goes wrong with git rebase — and how to recover with the reflog and rebase safely.`,
        images: ['https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png'],
    };
    (data as any).robots = { index: true, follow: true, googleBot: { index: true, follow: true } };
    return data;
}

export default function DangerOfRebaseInGit() {
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
                    <h1>The Danger of Rebase in Git — 7 Ways It Can Go Wrong (and How to Recover)</h1>
                    <p className="blog-meta">Published <time dateTime={DATE_PUBLISHED}>{DATE_PUBLISHED}</time> &nbsp;·&nbsp; LithiumGit Team &nbsp;·&nbsp; 13 min read</p>
                </div>

                <p className="blog-intro">
                    <strong>Git rebase</strong> is one of the most useful commands in Git — and one of the easiest to
                    get badly wrong. It gives you a clean, linear history, but it gets there by <em>rewriting</em> history,
                    and rewritten history behaves in ways that surprise even experienced developers: commits show up
                    twice, a teammate&apos;s work disappears after a push, or a conflict is resolved the wrong way with no
                    trace of what happened. This guide walks through the seven real dangers of rebase, what causes each
                    one, how to recover when it happens, and a checklist for rebasing safely.
                </p>

                <div className="tip-box">
                    <span className="tip-label">💡 New to rebase?</span>
                    Start with <a href="/blogs/git-merge-vs-rebase">Git merge vs rebase</a> — this article assumes you
                    know what a rebase does and focuses on what can go wrong.
                </div>

                {/* ── SECTION 1 — THE ROOT CAUSE ── */}
                <section className="blog-section">
                    <h2>Why Rebase Is Dangerous: It Copies Commits, It Doesn&apos;t Move Them</h2>
                    <p>
                        Every danger in this article comes from one fact. When you run <code>git rebase main</code>, Git
                        does not pick up your commits and move them. A commit&apos;s hash is calculated from its contents,
                        and its contents include the hash of its parent — so a commit can never be given a new parent.
                        Instead, Git creates a brand-new <strong>copy</strong> of each of your commits on top
                        of <code>main</code>, then moves your branch label to the last copy.
                    </p>

                    <div className="blog-diagram">
                        <svg viewBox="0 0 960 550" role="img" aria-label="Diagram of git rebase main: before, feature has commits F1 and F2 branching from C1. After, feature points to new copies F1 prime and F2 prime on top of C3, while the original F1 and F2 are left behind with no branch pointing at them">
                            <defs>
                                <marker id="rbArrow1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                    <path className="dg-marker" d="M0,0 L10,5 L0,10 z" />
                                </marker>
                                <marker id="rbGhost1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                    <path className="dg-marker-ghost" d="M0,0 L10,5 L0,10 z" />
                                </marker>
                            </defs>

                            {/* Row 1 — before */}
                            <text className="dg-row-label" x="20" y="118">Before</text>
                            <text className="dg-sub" x="20" y="138">feature branched off at C1</text>

                            <circle className="dg-node" cx="260" cy="110" r="26" />
                            <text className="dg-node-label" x="260" y="115" textAnchor="middle">C1</text>
                            <circle className="dg-node" cx="400" cy="110" r="26" />
                            <text className="dg-node-label" x="400" y="115" textAnchor="middle">C2</text>
                            <circle className="dg-node" cx="540" cy="110" r="26" />
                            <text className="dg-node-label" x="540" y="115" textAnchor="middle">C3</text>
                            <path className="dg-arrow" d="M292,110 H368" markerEnd="url(#rbArrow1)" />
                            <path className="dg-arrow" d="M432,110 H508" markerEnd="url(#rbArrow1)" />

                            <rect className="dg-ref" x="495" y="30" width="90" height="32" rx="6" />
                            <text className="dg-ref-label" x="540" y="51" textAnchor="middle">main</text>
                            <path className="dg-arrow" d="M540,62 V80" markerEnd="url(#rbArrow1)" />

                            <circle className="dg-node" cx="400" cy="200" r="26" />
                            <text className="dg-node-label" x="400" y="205" textAnchor="middle">F1</text>
                            <circle className="dg-node" cx="540" cy="200" r="26" />
                            <text className="dg-node-label" x="540" y="205" textAnchor="middle">F2</text>
                            <path className="dg-arrow" d="M287,127 L373,183" markerEnd="url(#rbArrow1)" />
                            <path className="dg-arrow" d="M432,200 H508" markerEnd="url(#rbArrow1)" />

                            <rect className="dg-ref" x="495" y="246" width="90" height="32" rx="6" />
                            <text className="dg-ref-label" x="540" y="267" textAnchor="middle">feature</text>
                            <path className="dg-arrow" d="M540,246 V230" markerEnd="url(#rbArrow1)" />

                            <path className="dg-divider" d="M20,310 H940" />

                            {/* Row 2 — after */}
                            <text className="dg-row-label" x="20" y="418">After git rebase main</text>
                            <text className="dg-sub" x="20" y="438">feature now ends at F2′</text>

                            <circle className="dg-node" cx="260" cy="410" r="26" />
                            <text className="dg-node-label" x="260" y="415" textAnchor="middle">C1</text>
                            <circle className="dg-node" cx="400" cy="410" r="26" />
                            <text className="dg-node-label" x="400" y="415" textAnchor="middle">C2</text>
                            <circle className="dg-node" cx="540" cy="410" r="26" />
                            <text className="dg-node-label" x="540" y="415" textAnchor="middle">C3</text>
                            <circle className="dg-node" cx="680" cy="410" r="26" />
                            <text className="dg-node-label" x="680" y="415" textAnchor="middle">F1′</text>
                            <circle className="dg-node" cx="820" cy="410" r="26" />
                            <text className="dg-node-label" x="820" y="415" textAnchor="middle">F2′</text>
                            <path className="dg-arrow" d="M292,410 H368" markerEnd="url(#rbArrow1)" />
                            <path className="dg-arrow" d="M432,410 H508" markerEnd="url(#rbArrow1)" />
                            <path className="dg-arrow" d="M572,410 H648" markerEnd="url(#rbArrow1)" />
                            <path className="dg-arrow" d="M712,410 H788" markerEnd="url(#rbArrow1)" />
                            <text className="dg-sub" x="750" y="462" textAnchor="middle">same changes, new hashes</text>

                            <rect className="dg-ref" x="495" y="330" width="90" height="32" rx="6" />
                            <text className="dg-ref-label" x="540" y="351" textAnchor="middle">main</text>
                            <path className="dg-arrow" d="M540,362 V380" markerEnd="url(#rbArrow1)" />
                            <rect className="dg-ref" x="775" y="330" width="90" height="32" rx="6" />
                            <text className="dg-ref-label" x="820" y="351" textAnchor="middle">feature</text>
                            <path className="dg-arrow" d="M820,362 V380" markerEnd="url(#rbArrow1)" />

                            <circle className="dg-node-ghost" cx="400" cy="500" r="26" />
                            <text className="dg-node-label-ghost" x="400" y="505" textAnchor="middle">F1</text>
                            <circle className="dg-node-ghost" cx="540" cy="500" r="26" />
                            <text className="dg-node-label-ghost" x="540" y="505" textAnchor="middle">F2</text>
                            <path className="dg-arrow-ghost" d="M287,427 L373,483" markerEnd="url(#rbGhost1)" />
                            <path className="dg-arrow-ghost" d="M432,500 H508" markerEnd="url(#rbGhost1)" />
                            <text className="dg-note" x="590" y="496">The originals, left behind — no branch points here.</text>
                            <text className="dg-note" x="590" y="514">Only the reflog still remembers them.</text>
                        </svg>
                        <p className="diagram-caption">
                            Rebase creates F1′ and F2′ as new commits with new hashes. The original F1 and F2 still
                            exist, but no branch points at them any more.
                        </p>
                    </div>

                    <p>
                        On your own machine, that&apos;s harmless — the old F1 and F2 are simply forgotten. The trouble
                        starts when <strong>someone else still has the originals</strong>, or when the copies turn out not
                        to be quite the same as the originals. Each danger below is a variation of this picture.
                    </p>

                    <div className="concept-box">
                        <strong>The one rule behind every rebase danger</strong>
                        Rebase replaces commits with copies. Anything that still refers to the originals — a
                        teammate&apos;s clone, an open pull request, a branch built on top, a passing CI run — is now out
                        of sync with your branch.
                    </div>
                </section>

                {/* ── DANGER 1 — DUPLICATE COMMITS ── */}
                <section className="blog-section">
                    <h2>Danger 1: Rebasing a Shared Branch Duplicates Commits</h2>
                    <p>
                        Alice and Bob both work on <code>feature</code>, which contains F1 and F2. Alice rebases it onto
                        the latest <code>main</code> and force-pushes. Meanwhile, Bob has committed B1 on top of his copy
                        of F2.
                    </p>
                    <p>
                        If Bob&apos;s Git is set to merge when pulling (<code>pull.rebase=false</code>, a common setting),
                        running <code>git pull</code> sees two unrelated lines of history — Alice&apos;s F1′ and F2′ on the
                        remote, and his own F1, F2, and B1 — and does what it always does with diverged branches: it
                        merges them.
                    </p>

                    <div className="blog-diagram">
                        <svg viewBox="0 0 960 320" role="img" aria-label="Diagram of Bob's feature branch after git pull: the original commits F1 and F2 plus Bob's B1 on one line, the rebased copies F1 prime and F2 prime on another, joined by a merge commit M, so every feature change appears twice">
                            <defs>
                                <marker id="rbArrow2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                    <path className="dg-marker" d="M0,0 L10,5 L0,10 z" />
                                </marker>
                            </defs>

                            <text className="dg-row-label" x="20" y="30">Bob&apos;s feature after git pull</text>
                            <text className="dg-sub" x="20" y="50">Alice rebased and force-pushed; Bob merged the result into his old copy</text>

                            <circle className="dg-node" cx="200" cy="120" r="26" />
                            <text className="dg-node-label" x="200" y="125" textAnchor="middle">C1</text>
                            <circle className="dg-node" cx="320" cy="120" r="26" />
                            <text className="dg-node-label" x="320" y="125" textAnchor="middle">C2</text>
                            <circle className="dg-node" cx="440" cy="120" r="26" />
                            <text className="dg-node-label" x="440" y="125" textAnchor="middle">C3</text>
                            <circle className="dg-node-danger" cx="560" cy="120" r="26" />
                            <text className="dg-node-label" x="560" y="125" textAnchor="middle">F1′</text>
                            <circle className="dg-node-danger" cx="680" cy="120" r="26" />
                            <text className="dg-node-label" x="680" y="125" textAnchor="middle">F2′</text>
                            <path className="dg-arrow" d="M232,120 H288" markerEnd="url(#rbArrow2)" />
                            <path className="dg-arrow" d="M352,120 H408" markerEnd="url(#rbArrow2)" />
                            <path className="dg-arrow" d="M472,120 H528" markerEnd="url(#rbArrow2)" />
                            <path className="dg-arrow" d="M592,120 H648" markerEnd="url(#rbArrow2)" />

                            <circle className="dg-node-danger" cx="320" cy="230" r="26" />
                            <text className="dg-node-label" x="320" y="235" textAnchor="middle">F1</text>
                            <circle className="dg-node-danger" cx="440" cy="230" r="26" />
                            <text className="dg-node-label" x="440" y="235" textAnchor="middle">F2</text>
                            <circle className="dg-node" cx="560" cy="230" r="26" />
                            <text className="dg-node-label" x="560" y="235" textAnchor="middle">B1</text>
                            <path className="dg-arrow" d="M224,142 L296,208" markerEnd="url(#rbArrow2)" />
                            <path className="dg-arrow" d="M352,230 H408" markerEnd="url(#rbArrow2)" />
                            <path className="dg-arrow" d="M472,230 H528" markerEnd="url(#rbArrow2)" />

                            <circle className="dg-node" cx="800" cy="175" r="26" />
                            <text className="dg-node-label" x="800" y="180" textAnchor="middle">M</text>
                            <path className="dg-arrow" d="M709,133 L771,162" markerEnd="url(#rbArrow2)" />
                            <path className="dg-arrow" d="M591,223 L769,182" markerEnd="url(#rbArrow2)" />

                            <rect className="dg-ref" x="850" y="159" width="90" height="32" rx="6" />
                            <text className="dg-ref-label" x="895" y="180" textAnchor="middle">feature</text>
                            <path className="dg-arrow" d="M850,175 H832" markerEnd="url(#rbArrow2)" />

                            <text className="dg-danger-note" x="480" y="300" textAnchor="middle">F1 and F1′, F2 and F2′ — the same changes, now in history twice</text>
                        </svg>
                        <p className="diagram-caption">
                            Bob&apos;s branch now contains both the originals and the rebased copies. If he pushes, the
                            duplicates land on the shared branch for everyone.
                        </p>
                    </div>

                    <p>
                        Git does not treat F1 and F1′ as the same commit. They have different hashes, so to Git they are
                        simply two commits that happen to make similar changes. The log now shows every feature change
                        twice, any difference between an original and its copy can turn into a conflict, and once Bob
                        pushes, the duplicates spread to everyone else on the team.
                    </p>

                    <div className="tip-box">
                        <span className="tip-label">💡 The Golden Rule of Rebasing</span>
                        Only rebase commits that exist nowhere but on your machine, or on a branch that only you push to.
                        Once someone else might have pulled a commit, merge instead of rebasing.
                    </div>
                </section>

                {/* ── DANGER 2 — FORCE PUSH ── */}
                <section className="blog-section">
                    <h2>Danger 2: A Force Push Can Silently Erase a Teammate&apos;s Work</h2>
                    <p>
                        After a rebase, your local branch and the remote branch have diverged, so a normal{' '}
                        <code>git push</code> is rejected. The usual response is <code>git push --force</code>, which
                        tells the remote to replace its branch with yours <strong>no matter what is on it</strong>.
                    </p>
                    <p>
                        If Bob pushed B1 to <code>feature</code> while you were rebasing, your force push throws it away.
                        The remote branch now matches your rebased history exactly, and B1 is no longer on it. Git
                        doesn&apos;t warn you, and Bob won&apos;t find out until he next pulls.
                    </p>

                    <div className="blog-diagram">
                        <svg viewBox="0 0 960 330" role="img" aria-label="Diagram of a force push: before, the remote feature branch is C1, F1, F2, B1 where B1 is Bob's commit. After git push --force, the remote branch is C1, C2, C3, F1 prime, F2 prime, and B1 is gone">
                            <defs>
                                <marker id="rbArrow3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                                    <path className="dg-marker" d="M0,0 L10,5 L0,10 z" />
                                </marker>
                            </defs>

                            {/* Row 1 — remote before the push */}
                            <text className="dg-row-label" x="20" y="96">Remote, before your push</text>
                            <text className="dg-sub" x="20" y="116">Bob pushed B1 while you rebased</text>

                            <circle className="dg-node" cx="260" cy="100" r="26" />
                            <text className="dg-node-label" x="260" y="105" textAnchor="middle">C1</text>
                            <circle className="dg-node" cx="400" cy="100" r="26" />
                            <text className="dg-node-label" x="400" y="105" textAnchor="middle">F1</text>
                            <circle className="dg-node" cx="540" cy="100" r="26" />
                            <text className="dg-node-label" x="540" y="105" textAnchor="middle">F2</text>
                            <circle className="dg-node-danger" cx="680" cy="100" r="26" />
                            <text className="dg-node-label" x="680" y="105" textAnchor="middle">B1</text>
                            <path className="dg-arrow" d="M292,100 H368" markerEnd="url(#rbArrow3)" />
                            <path className="dg-arrow" d="M432,100 H508" markerEnd="url(#rbArrow3)" />
                            <path className="dg-arrow" d="M572,100 H648" markerEnd="url(#rbArrow3)" />

                            <rect className="dg-ref" x="610" y="20" width="140" height="32" rx="6" />
                            <text className="dg-ref-label" x="680" y="41" textAnchor="middle">origin/feature</text>
                            <path className="dg-arrow" d="M680,52 V70" markerEnd="url(#rbArrow3)" />

                            <path className="dg-divider" d="M20,155 H940" />

                            {/* Row 2 — remote after the force push */}
                            <text className="dg-row-label" x="20" y="246">After git push --force</text>
                            <text className="dg-sub" x="20" y="266">B1 is no longer on the remote</text>

                            <circle className="dg-node" cx="260" cy="250" r="26" />
                            <text className="dg-node-label" x="260" y="255" textAnchor="middle">C1</text>
                            <circle className="dg-node" cx="400" cy="250" r="26" />
                            <text className="dg-node-label" x="400" y="255" textAnchor="middle">C2</text>
                            <circle className="dg-node" cx="540" cy="250" r="26" />
                            <text className="dg-node-label" x="540" y="255" textAnchor="middle">C3</text>
                            <circle className="dg-node" cx="680" cy="250" r="26" />
                            <text className="dg-node-label" x="680" y="255" textAnchor="middle">F1′</text>
                            <circle className="dg-node" cx="820" cy="250" r="26" />
                            <text className="dg-node-label" x="820" y="255" textAnchor="middle">F2′</text>
                            <path className="dg-arrow" d="M292,250 H368" markerEnd="url(#rbArrow3)" />
                            <path className="dg-arrow" d="M432,250 H508" markerEnd="url(#rbArrow3)" />
                            <path className="dg-arrow" d="M572,250 H648" markerEnd="url(#rbArrow3)" />
                            <path className="dg-arrow" d="M712,250 H788" markerEnd="url(#rbArrow3)" />

                            <rect className="dg-ref" x="750" y="170" width="140" height="32" rx="6" />
                            <text className="dg-ref-label" x="820" y="191" textAnchor="middle">origin/feature</text>
                            <path className="dg-arrow" d="M820,202 V220" markerEnd="url(#rbArrow3)" />

                            <text className="dg-danger-note" x="480" y="315" textAnchor="middle">No warning — B1 now exists only on Bob&apos;s machine</text>
                        </svg>
                        <p className="diagram-caption">
                            git push --force replaced the remote branch with your rebased history. B1 still exists on
                            Bob&apos;s machine, but it is gone from the remote.
                        </p>
                    </div>

                    <h3>Use --force-with-lease, and add --force-if-includes</h3>
                    <p>
                        <code>--force-with-lease</code> adds a safety check: it only overwrites the remote branch if it
                        still points where your last fetch saw it. If someone pushed in the meantime, the push is
                        rejected with <code>stale info</code>, so you can fetch and look before trying again.
                    </p>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Dangerous: overwrites the remote branch unconditionally`}</span>{`
`}<span className="cli-cmd">{`git push --force`}</span>{`

`}<span className="cli-comment">{`# Safer: refuses if the remote branch moved since your last fetch`}</span>{`
`}<span className="cli-cmd">{`git push --force-with-lease`}</span>{`

`}<span className="cli-comment">{`# Safest: also refuses if you fetched new commits but never integrated them (Git 2.30+)`}</span>{`
`}<span className="cli-cmd">{`git push --force-with-lease --force-if-includes`}</span>
                        </pre>
                    </div>

                    <div className="tip-box">
                        <span className="tip-label">⚠️ Background fetches quietly defeat --force-with-lease</span>
                        Many editors and Git GUIs fetch automatically in the background. A fetch updates your
                        remote-tracking branch, so <code>--force-with-lease</code> now believes you have seen Bob&apos;s
                        B1 — even though it never made it into your branch — and lets the push overwrite it.{' '}
                        <code>--force-if-includes</code> closes that gap by also checking that the remote&apos;s latest
                        commit was actually integrated into your local branch. Make it the default for every lease push
                        with <code>git config --global push.useForceIfIncludes true</code>.
                    </div>
                </section>

                {/* ── DANGER 3 — CONFLICTS ── */}
                <section className="blog-section">
                    <h2>Danger 3: Conflicts Are Confusing — and Their Resolutions Leave No Trace</h2>
                    <p>
                        A merge stops for conflicts at most once. A rebase can stop once <strong>per replayed
                        commit</strong>, and you may resolve the same area of code several times over as each commit is
                        replayed. Three things make this riskier than it looks.
                    </p>

                    <h3>&quot;Ours&quot; and &quot;theirs&quot; are swapped</h3>
                    <p>
                        During a rebase, Git builds the new history by checking out the branch you are rebasing{' '}
                        <em>onto</em> and replaying your commits on top of it. So from Git&apos;s point of view, the
                        upstream branch is &quot;ours&quot; and <strong>your own commit is &quot;theirs&quot;</strong> —
                        the opposite of what most people expect.
                    </p>
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Side of the conflict</th>
                                <th>During git merge feature (on main)</th>
                                <th>During git rebase main (on feature)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>ours</strong> · <code>{'<<<<<<<'}</code> side · Current changes</td>
                                <td><code>main</code> — the branch you are on</td>
                                <td><code>main</code>, plus your commits already replayed</td>
                            </tr>
                            <tr>
                                <td><strong>theirs</strong> · <code>{'>>>>>>>'}</code> side · Incoming changes</td>
                                <td><code>feature</code> — the branch being merged in</td>
                                <td>Your commit that is being replayed</td>
                            </tr>
                            <tr>
                                <td><code>git checkout --ours file</code></td>
                                <td>Keeps your branch&apos;s version</td>
                                <td>Keeps main&apos;s version and <strong>discards your change</strong></td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        LithiumGit&apos;s conflict editor labels the two sides by Git&apos;s conflict markers:{' '}
                        <strong>Current changes</strong> is the <code>{'<<<<<<<'}</code> side and{' '}
                        <strong>Incoming changes</strong> is the <code>{'>>>>>>>'}</code> side. During a rebase, that
                        means Current is the branch you are rebasing onto and Incoming is your own commit. Click{' '}
                        <strong>Accept Current Change</strong> out of habit and you keep their code and throw away
                        yours. To help you keep your bearings, LithiumGit shows the message of the commit being replayed
                        right above the rebase&apos;s Continue, Skip, and Abort buttons.
                    </p>

                    <h3>A bad resolution is invisible</h3>
                    <p>
                        When you resolve a conflict during a merge, the resolution is recorded in the merge commit, where
                        reviewers can see it and <code>git show</code> can display it. During a rebase, your resolution is
                        folded silently into the rewritten commit. If you accidentally delete a line while resolving, the
                        history simply says you wrote the code that way — nothing records that a conflict ever happened.
                    </p>

                    <h3>&quot;Skip&quot; drops the whole commit</h3>
                    <div className="tip-box">
                        <span className="tip-label">⚠️ Skip is not &quot;skip this conflict&quot;</span>
                        <code>git rebase --skip</code> — and the <strong>Skip</strong> button in LithiumGit, which runs
                        it — throws away the entire commit being replayed, conflicting and non-conflicting changes alike.
                        Use it only when the commit is genuinely no longer needed, for example because the same change
                        already landed on <code>main</code>.
                    </div>
                </section>

                {/* ── DANGER 4 — UNTESTED COMMITS ── */}
                <section className="blog-section">
                    <h2>Danger 4: Rebased Commits Were Never Tested</h2>
                    <p>
                        Each original commit was written, and hopefully tested, against the old base. The rebased copies
                        sit on a base they have never been run against. A rebase can finish without a single conflict and
                        still leave broken commits behind.
                    </p>
                    <p>
                        A typical example: someone on <code>main</code> renames <code>getUser()</code> to{' '}
                        <code>fetchUser()</code> and updates every call site. Your F1 adds a new call
                        to <code>getUser()</code> in a different file. The two changes touch different lines, so the
                        rebase applies cleanly — and F1′ doesn&apos;t compile. You notice at the end, add a &quot;fix
                        build after rebase&quot; commit, and push. The branch tip works, but F1′ and F2′ stay broken
                        forever, which makes <code>git bisect</code> unreliable for anyone who later hunts a bug through
                        those commits.
                    </p>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Run your tests after every replayed commit; the rebase stops at the first failure`}</span>{`
`}<span className="cli-cmd">{`git rebase --exec "npm test" main`}</span>
                        </pre>
                    </div>
                    <p>
                        When a test fails, the rebase pauses on that commit, so you can fix it right there with{' '}
                        <code>git commit --amend</code> and run <code>git rebase --continue</code> — instead of patching
                        it with an extra commit at the end.
                    </p>
                </section>

                {/* ── DANGER 5 — MERGE COMMITS ── */}
                <section className="blog-section">
                    <h2>Danger 5: Merge Commits Quietly Disappear</h2>
                    <p>
                        By default, <code>git rebase</code> flattens your branch. If it contains merge commits — say you
                        merged a colleague&apos;s branch into yours last week — rebase drops those merge commits and
                        replays everything as one straight line. The branch&apos;s structure is gone, and conflicts you
                        already resolved in those merges can come back, this time one commit at a time.
                    </p>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Keep merge commits and the branch's shape while rebasing`}</span>{`
`}<span className="cli-cmd">{`git rebase --rebase-merges main`}</span>
                        </pre>
                    </div>
                    <p>
                        <code>--rebase-merges</code> recreates each merge rather than copying it, so a conflict you
                        resolved by hand inside a merge commit still has to be resolved again.
                    </p>
                </section>

                {/* ── DANGER 6 — INTERACTIVE REBASE ── */}
                <section className="blog-section">
                    <h2>Danger 6: Interactive Rebase Can Delete Commits Without Asking</h2>
                    <p>
                        Interactive rebase (<code>git rebase -i</code>) opens a to-do list of commits for you to
                        reorder, squash, edit, or drop. It&apos;s a powerful cleanup tool, and it takes the list
                        literally: <strong>delete a line and that commit is gone</strong>, with no confirmation and no
                        warning. Similarly, a <code>fixup</code> that you meant to be a <code>squash</code> keeps the
                        changes but silently discards that commit&apos;s message.
                    </p>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# git rebase -i HEAD~3 opens a to-do list like this:`}</span>{`
pick 5c6b7a8 Add login form
pick 1f2e3d4 Add login form validation
pick 9a8b7c6 Add password reset email

`}<span className="cli-comment">{`# Deleting a line drops that commit. Make Git refuse instead,`}</span>{`
`}<span className="cli-comment">{`# so dropping a commit requires an explicit "drop" command:`}</span>{`
`}<span className="cli-cmd">{`git config --global rebase.missingCommitsCheck error`}</span>
                        </pre>
                    </div>
                </section>

                {/* ── DANGER 7 — STACKED BRANCHES ── */}
                <section className="blog-section">
                    <h2>Danger 7: Branches Built on Top Get Left Behind</h2>
                    <p>
                        Suppose <code>feature-b</code> was branched from <code>feature-a</code> so you could keep working
                        while feature-a is in review. If you rebase <code>feature-a</code> onto <code>main</code>,{' '}
                        <code>feature-b</code> still points at the <em>original</em> feature-a commits — the ones you
                        just replaced. Rebase feature-b later and Git can end up replaying those old commits as well,
                        which leads to duplicate commits or conflicts with their own copies.
                    </p>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# From the top branch, rebase the whole stack and move every branch in it (Git 2.38+)`}</span>{`
`}<span className="cli-cmd">{`git checkout feature-b`}</span>{`
`}<span className="cli-cmd">{`git rebase --update-refs main`}</span>{`

`}<span className="cli-comment">{`# Or make that the default for every rebase`}</span>{`
`}<span className="cli-cmd">{`git config --global rebase.updateRefs true`}</span>
                        </pre>
                    </div>
                </section>

                {/* ── RECOVERY ── */}
                <section className="blog-section">
                    <h2>How to Recover From a Bad Rebase</h2>
                    <p>
                        The good news: a rebase almost never destroys committed work on your own machine. The originals
                        are still in your repository — you just need to know where to look.
                    </p>

                    <h3>While the rebase is still running</h3>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Stop, and put everything back exactly as it was before the rebase started`}</span>{`
`}<span className="cli-cmd">{`git rebase --abort`}</span>
                        </pre>
                    </div>
                    <p>
                        In LithiumGit, a paused rebase shows the commit being replayed with <strong>Continue</strong>,{' '}
                        <strong>Skip</strong>, and <strong>Abort</strong> buttons in the changes view. Abort runs the same
                        command. Continue is blocked until every conflicted file is resolved, so you can&apos;t
                        accidentally carry on with conflict markers still in the code.
                    </p>

                    <h3>Right after it finished</h3>
                    <p>
                        Before it starts, rebase saves the commit your branch pointed at in <code>ORIG_HEAD</code>. If
                        you realize straight away that something went wrong, jump back to it:
                    </p>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Return the branch to where it was before the rebase`}</span>{`
`}<span className="cli-cmd">{`git reset --hard ORIG_HEAD`}</span>
                        </pre>
                    </div>
                    <div className="tip-box">
                        <span className="tip-label">⚠️ Use ORIG_HEAD immediately — or not at all</span>
                        <code>ORIG_HEAD</code> is overwritten by the next reset, merge, pull, or rebase. And{' '}
                        <code>reset --hard</code> discards uncommitted changes, so{' '}
                        <a href="/blogs/3-ways-to-undo-in-git-and-only-one-is-safe-to-push">check what reset actually
                        throws away</a> before running it.
                    </div>

                    <h3>Days later: use the reflog</h3>
                    <p>
                        Your <strong>reflog</strong> records every position your branch has pointed at. A whole rebase is
                        recorded in the branch&apos;s reflog as a single entry, so the commit just before it is the tip
                        from before the rebase:
                    </p>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-cmd">{`git reflog show feature`}</span>{`
c0c9e56 feature@{0}: rebase (finish): refs/heads/feature onto 665e498769bacc2e62b3b38c3f628d06851c3307
cc76475 feature@{1}: commit: Add login form validation
a137658 feature@{2}: commit: Add login form

`}<span className="cli-comment">{`# Look at the old tip without touching anything`}</span>{`
`}<span className="cli-cmd">{`git log --oneline feature@{1}`}</span>{`

`}<span className="cli-comment">{`# Keep it safe on its own branch...`}</span>{`
`}<span className="cli-cmd">{`git branch feature-before-rebase feature@{1}`}</span>{`

`}<span className="cli-comment">{`# ...or move feature back to it`}</span>{`
`}<span className="cli-cmd">{`git reset --hard feature@{1}`}</span>
                        </pre>
                    </div>
                    <p>
                        Rebased-away commits are kept for about 30 days by default (<code>gc.reflogExpireUnreachable</code>)
                        before Git&apos;s garbage collection may delete them. And the reflog is <strong>local</strong>: it
                        only knows about commits that were on your machine. If a force push erased a teammate&apos;s
                        commit, that commit lives in their clone and their reflog, not yours — so they are the one who
                        can push it back.
                    </p>

                    <h3>When someone else rebased a branch you were working on</h3>
                    <p>
                        If you are Bob from Danger 1, don&apos;t merge the rewritten branch into your old copy. Fetch,
                        then move only <em>your</em> commits onto the new history:
                    </p>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-cmd">{`git fetch origin`}</span>{`

`}<span className="cli-comment">{`# Replay only the commits made after the old origin/feature onto the new one`}</span>{`
`}<span className="cli-cmd">{`git rebase --onto origin/feature origin/feature@{1}`}</span>
                        </pre>
                    </div>
                    <p>
                        Here <code>{'origin/feature@{1}'}</code> means &quot;where origin/feature pointed before that
                        fetch&quot; — the old F2. Everything after it, B1, is replayed onto F2′, and the old F1 and F2 are
                        left behind. In many cases <code>git pull --rebase</code> works this out on its own, but check
                        the result with <code>git log --graph</code> before you push.
                    </p>
                </section>

                {/* ── AT A GLANCE ── */}
                <section className="blog-section">
                    <h2>The 7 Dangers of Rebase at a Glance</h2>
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Danger</th>
                                <th>What goes wrong</th>
                                <th>Safeguard</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Rebasing a shared branch</td>
                                <td>Teammates end up with every commit twice</td>
                                <td>Only rebase commits nobody else has</td>
                            </tr>
                            <tr>
                                <td>Force pushing</td>
                                <td>A teammate&apos;s pushed commits vanish from the remote</td>
                                <td><code>--force-with-lease --force-if-includes</code></td>
                            </tr>
                            <tr>
                                <td>Resolving conflicts</td>
                                <td>Ours and theirs swap; resolutions leave no trace</td>
                                <td>Read the sides carefully; review with <code>git range-diff</code></td>
                            </tr>
                            <tr>
                                <td>Untested copies</td>
                                <td>Intermediate commits no longer build</td>
                                <td><code>git rebase --exec &quot;npm test&quot;</code></td>
                            </tr>
                            <tr>
                                <td>Merge commits</td>
                                <td>The branch is flattened and merge resolutions are lost</td>
                                <td><code>git rebase --rebase-merges</code></td>
                            </tr>
                            <tr>
                                <td>Interactive rebase</td>
                                <td>A deleted line silently drops a commit</td>
                                <td><code>rebase.missingCommitsCheck error</code></td>
                            </tr>
                            <tr>
                                <td>Stacked branches</td>
                                <td>Dependent branches still point at the old commits</td>
                                <td><code>git rebase --update-refs</code></td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* ── CHECKLIST ── */}
                <section className="blog-section">
                    <h2>A Safe Rebase Checklist</h2>
                    <ol>
                        <li><strong>Make sure the commits are yours alone</strong> — not pushed yet, or pushed only to a branch nobody else uses.</li>
                        <li><strong>Start from a clean working tree</strong> — commit or stash anything in progress.</li>
                        <li><strong>Create a backup branch</strong>, so getting back is one command rather than a reflog hunt.</li>
                        <li><strong>Rebase with tests</strong> if you can, so every replayed commit is checked.</li>
                        <li><strong>Compare old and new</strong> with <code>git range-diff</code>, which pairs each original commit with its copy and shows only what changed between them — exactly where a conflict-resolution mistake shows up.</li>
                        <li><strong>Push with a lease</strong>, never a bare <code>--force</code>.</li>
                        <li><strong>Tell your team</strong> if the branch was shared after all, before they pull.</li>
                        <li><strong>Delete the backup</strong> once you are happy with the result.</li>
                    </ol>
                    <div className="cli-block">
                        <span className="cli-label">Terminal — the whole routine</span>
                        <pre>
                            <span className="cli-cmd">{`git status`}</span>{`
`}<span className="cli-cmd">{`git branch backup/feature`}</span>{`
`}<span className="cli-cmd">{`git rebase --exec "npm test" main`}</span>{`
`}<span className="cli-cmd">{`git range-diff main backup/feature feature`}</span>{`
`}<span className="cli-cmd">{`git push --force-with-lease --force-if-includes`}</span>{`
`}<span className="cli-cmd">{`git branch -D backup/feature`}</span>
                        </pre>
                    </div>

                    <h3>One-time setup that makes every rebase safer</h3>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# --force-with-lease also checks that you integrated what you fetched`}</span>{`
`}<span className="cli-cmd">{`git config --global push.useForceIfIncludes true`}</span>{`

`}<span className="cli-comment">{`# Refuse to silently drop a commit deleted from the interactive to-do list`}</span>{`
`}<span className="cli-cmd">{`git config --global rebase.missingCommitsCheck error`}</span>{`

`}<span className="cli-comment">{`# Move stacked branches along with the commits they point at`}</span>{`
`}<span className="cli-cmd">{`git config --global rebase.updateRefs true`}</span>{`

`}<span className="cli-comment">{`# Remember how you resolved a conflict and reapply it if the same conflict comes back,`}</span>{`
`}<span className="cli-comment">{`# for example when you abort a rebase and start it again`}</span>{`
`}<span className="cli-cmd">{`git config --global rerere.enabled true`}</span>
                        </pre>
                    </div>

                    <div className="tip-box">
                        <span className="tip-label">💡 Rule of thumb</span>
                        <strong>Rebase what&apos;s yours, merge what&apos;s shared.</strong> Rebase is a great tool for
                        tidying commits before anyone else sees them. Once a commit is shared, treat it as permanent.
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
