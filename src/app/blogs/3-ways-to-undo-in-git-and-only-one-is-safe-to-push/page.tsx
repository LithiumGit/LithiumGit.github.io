import { Config } from '../../../config';
import { IMetadataParams } from '../../../lib/interfaces';
import { UiUtils } from '../../../lib/utilities/UiUtils';
import '../../styles/blogs/3_ways_to_undo_in_git.scss';

import beforeReset from '../../images/blog/reset_vs_revert_vs_restore/before_reset.png';
import afterReset from '../../images/blog/reset_vs_revert_vs_restore/after_reset.png';
import beforeRevert from '../../images/blog/reset_vs_revert_vs_restore/before_revert.png';
import afterRevert from '../../images/blog/reset_vs_revert_vs_restore/after_revert.png';

const PAGE_URL = "https://lithiumgit.com/blogs/3-ways-to-undo-in-git-and-only-one-is-safe-to-push";
const DATE_PUBLISHED = "2026-07-28";
const DATE_MODIFIED = Config.PublishedDate;
const CURRENT_YEAR = new Date().getFullYear();

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "headline": `3 Ways to Undo in Git — And Only One Is Safe to Push (${CURRENT_YEAR})`,
    "description": "A clear guide to git reset, git revert, and git restore — what each command actually undoes, when they rewrite history, and which one is safe to use on shared branches.",
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
    "keywords": "git reset vs revert vs restore, git reset, git revert, git restore, git reset soft mixed hard, undo git commit, git checkout vs restore, LithiumGit",
    "wordCount": 1900,
    "inLanguage": "en-US",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lithiumgit.com" },
        { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://lithiumgit.com/blogs" },
        { "@type": "ListItem", "position": 3, "name": "3 Ways to Undo in Git", "item": PAGE_URL },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the difference between git reset, git revert, and git restore?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Git reset deletes commits from your current branch, moving it back to an earlier point in history, and optionally changes the staging area and working directory too. Git revert creates a new commit that undoes the changes of a previous commit, without deleting anything. Git restore is a newer, narrower command used to discard changes in the working directory or staging area for specific files, without touching commit history at all."
            }
        },
        {
            "@type": "Question",
            "name": "When should I use git revert instead of git reset?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use git revert when the commit you want to undo has already been pushed or shared with other people. Revert adds a new commit instead of rewriting history, so it is safe on shared branches. Use git reset only on local, unpushed commits that nobody else has pulled."
            }
        },
        {
            "@type": "Question",
            "name": "What is the difference between git reset --soft, --mixed, and --hard?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "git reset --soft deletes the commit(s) but keeps all their changes staged, ready to re-commit. git reset --mixed (the default) deletes the commit(s) and unstages the changes, but keeps them in your working directory. git reset --hard deletes the commit(s) and discards all staged and working directory changes permanently."
            }
        },
        {
            "@type": "Question",
            "name": "Why did Git introduce git restore if git checkout already existed?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Git checkout historically did too many unrelated things: switching branches, restoring files, and detaching HEAD. Git 2.23 split this into two dedicated commands — git switch for changing branches, and git restore for discarding file changes — making each command's purpose explicit and reducing accidental mistakes."
            }
        },
        {
            "@type": "Question",
            "name": "Can I undo a git reset --hard?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Often yes, as long as the commit still exists in Git's reflog. Running git reflog shows recent HEAD movements, and you can recover the lost commit with git reset --hard <commit-hash>. However, this only works for committed changes — uncommitted working directory changes discarded by --hard are gone for good."
            }
        }
    ]
};

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args, "blogs/3-ways-to-undo-in-git-and-only-one-is-safe-to-push");
    data.title = `3 Ways to Undo in Git — And Only One Is Safe to Push (${CURRENT_YEAR})`;
    data.description = `Git reset, git revert, and git restore all "undo" something — but they work in completely different ways. Learn what each command actually does, when it rewrites history, and which is safe to use in ${CURRENT_YEAR}.`;
    data.keywords = `git reset vs revert vs restore, git reset vs revert, git restore vs checkout, git reset soft mixed hard, git reset --hard, git revert commit, git restore file, undo git commit, undo last commit, undo staged changes, discard local changes git, is git reset dangerous, LithiumGit, git GUI client`;
    data.openGraph = {
        ...data.openGraph,
        title: `3 Ways to Undo in Git — And Only One Is Safe to Push (${CURRENT_YEAR})`,
        description: `git reset, git revert, and git restore all undo something — but very differently. Learn exactly what each one does and which is safe on shared branches.`,
        type: 'article',
        url: PAGE_URL,
        images: [
            {
                url: 'https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png',
                width: 512,
                height: 512,
                alt: 'LithiumGit — Git Reset vs Revert vs Restore Guide',
            },
        ],
        // @ts-ignore
        publishedTime: DATE_PUBLISHED,
        modifiedTime: DATE_MODIFIED,
        section: 'Git Tutorials',
        tags: ['git reset', 'git revert', 'git restore', 'git tutorial', 'version control', 'LithiumGit'],
    };
    (data as any).twitter = {
        card: 'summary_large_image',
        title: `3 Ways to Undo in Git — And Only One Is Safe to Push (${CURRENT_YEAR})`,
        description: `git reset, git revert, and git restore explained — what each one undoes, when it rewrites history, and which one is safe on shared branches.`,
        images: ['https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png'],
    };
    (data as any).robots = { index: true, follow: true, googleBot: { index: true, follow: true } };
    return data;
}

export default function GitResetVsRevertVsRestore() {
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
                    <h1>3 Ways to Undo in Git — And Only One Is Safe to Push</h1>
                    <p className="blog-meta">Published <time dateTime={DATE_PUBLISHED}>{DATE_PUBLISHED}</time> &nbsp;·&nbsp; LithiumGit Team &nbsp;·&nbsp; 9 min read</p>
                </div>

                <p className="blog-intro">
                    <strong>Git reset</strong>, <strong>git revert</strong>, and <strong>git restore</strong> all promise
                    the same thing — undo something you did not mean to do. That similarity is exactly why they get
                    confused so often. In reality, each command operates on a different part of Git (commit history,
                    the staging area, or the working directory), and picking the wrong one can either quietly rewrite
                    shared history or permanently delete work you cannot get back. This guide breaks down exactly what
                    each command touches, when it is safe, and which one you should reach for in every common situation.
                </p>

                {/* ── SECTION 1 — THE CORE CONCEPT ── */}
                <section className="blog-section">
                    <h2>The Core Difference in One Sentence</h2>
                    <div className="concept-box">
                        <strong>Git Reset</strong>
                        Deletes commits from your current branch, optionally rewriting the staging
                        area and working directory to match. Rewrites history.
                    </div>
                    <div className="concept-box">
                        <strong>Git Revert</strong>
                        Creates a brand-new commit that applies the exact opposite of an existing commit. History
                        is never rewritten — the mistake stays visible, but its effect is undone.
                    </div>
                    <div className="concept-box">
                        <strong>Git Restore</strong>
                        Discards uncommitted changes in specific files, either in your working directory or in the
                        staging area. Never touches commit history or branch pointers at all.
                    </div>
                    <p>
                        Think of it this way: <strong>reset</strong> rewinds the tape, <strong>revert</strong> records
                        a correction over the top without erasing the original, and <strong>restore</strong> only
                        cleans up what is on your desk right now — it never touches the tape at all.
                    </p>
                </section>

                {/* ── SECTION 2 — GIT RESET ── */}
                <section className="blog-section">
                    <h2>Git Reset — Deleting Commits From Your Branch</h2>
                    <p>
                        <code>git reset</code> deletes one or more commits from your current branch, moving it back
                        to an earlier point in history. What happens to the changes those deleted commits contained —
                        and to your working directory — depends entirely on which flag you use: <code>--soft</code>,{' '}
                        <code>--mixed</code> (the default), or <code>--hard</code>.
                    </p>

                    <h3>Before and after a git reset</h3>
                    <p>
                        Below, <code>feature</code> has three commits (F1, F2, F3). Running{' '}
                        <code>git reset HEAD~1</code> moves <code>feature</code> back one commit — F3 is deleted
                        from the branch entirely.
                    </p>
                    <div className="blog-image-row">
                        <div className="blog-image-block">
                            <img
                                src={beforeReset.src}
                                alt="Commit graph showing the feature branch with commits F1, F2, F3 before running git reset"
                            />
                            <p className="image-caption">Before — feature has three commits: F1, F2, F3</p>
                        </div>
                        <div className="blog-image-block">
                            <img
                                src={afterReset.src}
                                alt="Commit graph after git reset HEAD~1 showing F3 deleted and feature now ending at F2"
                            />
                            <p className="image-caption">After git reset HEAD~1 — F3 is deleted; feature now ends at F2</p>
                        </div>
                    </div>

                    <h3>The three modes of reset</h3>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# --soft: delete the commit(s), but keep all their changes staged, ready to re-commit.`}</span>{`
`}<span className="cli-cmd">{`git reset --soft HEAD~1`}</span>{`

`}<span className="cli-comment">{`# --mixed (default): delete the commit(s) and unstage their changes, but keep them in your files.`}</span>{`
`}<span className="cli-cmd">{`git reset HEAD~1`}</span>{`

`}<span className="cli-comment">{`# --hard: delete the commit(s) and discard staged + working directory changes entirely.`}</span>{`
`}<span className="cli-cmd">{`git reset --hard HEAD~1`}</span>
                        </pre>
                    </div>

                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Mode</th>
                                <th>Commit(s)</th>
                                <th>Staging area</th>
                                <th>Working directory</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>--soft</strong></td>
                                <td>Deleted from branch</td>
                                <td>Unchanged (stays staged)</td>
                                <td>Unchanged</td>
                            </tr>
                            <tr>
                                <td><strong>--mixed</strong> (default)</td>
                                <td>Deleted from branch</td>
                                <td>Reset (unstaged)</td>
                                <td>Unchanged</td>
                            </tr>
                            <tr>
                                <td><strong>--hard</strong></td>
                                <td>Deleted from branch</td>
                                <td>Reset (unstaged)</td>
                                <td>Reset (changes deleted)</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="tip-box">
                        <span className="tip-label">⚠️ Danger zone</span>
                        Running <code>git reset --hard</code> permanently discards any uncommitted work in your
                        working directory. There is no undo for that part. Going further back, e.g.{' '}
                        <code>git reset --hard HEAD~2</code>, also permanently removes those commits from your
                        branch history.
                    </div>

                    <h3>Key characteristics of Git Reset</h3>
                    <ul>
                        <li><strong>Deletes commits</strong> — everything after the reset point is removed from your branch history</li>
                        <li><strong>Local-only tool</strong> — safe on commits you have not pushed or shared</li>
                        <li><strong>Three modes</strong> — soft, mixed, and hard give you increasing levels of destructiveness</li>
                        <li><strong>Dangerous on shared branches</strong> — resetting a pushed branch and force-pushing can erase teammates&apos; work</li>
                    </ul>
                </section>

                {/* ── SECTION 3 — GIT REVERT ── */}
                <section className="blog-section">
                    <h2>Git Revert — Undo Without Rewriting History</h2>
                    <p>
                        <code>git revert</code> takes an existing commit, computes the inverse of its changes, and
                        applies that inverse as a brand-new commit. Nothing is deleted or rewritten — the original
                        &quot;mistake&quot; commit is still there in the log, followed by a new commit that cancels
                        it out.
                    </p>

                    <h3>Before and after a git revert</h3>
                    <p>
                        Starting from the same three commits, running <code>git revert</code> on one of them adds a
                        brand-new commit — F4 — on top. F1, F2, and F3 are untouched; the log simply gains an
                        additional commit that cancels out the change.
                    </p>
                    <div className="blog-image-row">
                        <div className="blog-image-block">
                            <img
                                src={beforeRevert.src}
                                alt="Commit graph showing the feature branch with commits F1, F2, F3 before running git revert"
                            />
                            <p className="image-caption">Before — feature has three commits: F1, F2, F3</p>
                        </div>
                        <div className="blog-image-block">
                            <img
                                src={afterRevert.src}
                                alt="Commit graph after git revert showing a new commit F4 added on top that undoes an earlier change"
                            />
                            <p className="image-caption">After git revert — F4 is added to undo the change; F1–F3 stay intact</p>
                        </div>
                    </div>

                    <h3>Reverting a single commit</h3>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Undo the changes introduced by a specific commit, keeping history intact`}</span>{`
`}<span className="cli-cmd">{`git revert <commit-hash>`}</span>{`

`}<span className="cli-comment">{`# Revert without immediately committing, so you can inspect or combine changes first`}</span>{`
`}<span className="cli-cmd">{`git revert --no-commit <commit-hash>`}</span>{`

`}<span className="cli-comment">{`# Revert a range of commits`}</span>{`
`}<span className="cli-cmd">{`git revert <oldest-commit-hash>..<newest-commit-hash>`}</span>
                        </pre>
                    </div>

                    <p>
                        Because revert produces a new commit rather than deleting old ones, it is the only one of the
                        three commands that is <strong>always safe on a branch other people have already pulled</strong>.
                        Anyone who fetches the branch simply sees the correction commit — nobody&apos;s local history
                        breaks.
                    </p>

                    <h3>Key characteristics of Git Revert</h3>
                    <ul>
                        <li><strong>Non-destructive</strong> — no commit is ever deleted or rewritten</li>
                        <li><strong>Safe on shared branches</strong> — the standard way to undo something already pushed</li>
                        <li><strong>Fully auditable</strong> — the log shows both the mistake and the fix</li>
                        <li><strong>Can conflict</strong> — reverting an old commit may conflict with later changes to the same lines</li>
                    </ul>
                </section>

                {/* ── SECTION 4 — GIT RESTORE ── */}
                <section className="blog-section">
                    <h2>Git Restore — Discarding File Changes, Nothing Else</h2>
                    <p>
                        <code>git restore</code> was introduced in Git 2.23 (2019) specifically to split apart the
                        overloaded <code>git checkout</code> command. Before restore existed, <code>git checkout</code> was
                        used both for switching branches <em>and</em> for discarding file changes — two very different
                        operations sharing one confusing command. Git 2.23 introduced <code>git switch</code> for
                        branches and <code>git restore</code> for files, so each command now does exactly one thing.
                    </p>
                    <p>
                        Unlike reset and revert, <code>git restore</code> never moves your branch pointer and never
                        touches commit history. It only affects uncommitted changes in your working directory or
                        staging area, file by file.
                    </p>

                    <h3>Restoring the working directory vs the staging area</h3>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Discard uncommitted changes to a file in your working directory`}</span>{`
`}<span className="cli-cmd">{`git restore src/app.ts`}</span>{`

`}<span className="cli-comment">{`# Unstage a file — keep its edits, just remove it from the staging area (--staged)`}</span>{`
`}<span className="cli-cmd">{`git restore --staged src/app.ts`}</span>{`

`}<span className="cli-comment">{`# Discard changes to every file in the working directory`}</span>{`
`}<span className="cli-cmd">{`git restore .`}</span>{`

`}<span className="cli-comment">{`# Restore a file to its state at a specific commit`}</span>{`
`}<span className="cli-cmd">{`git restore --source=<commit-hash> src/app.ts`}</span>
                        </pre>
                    </div>

                    <div className="tip-box">
                        <span className="tip-label">💡 Restore vs reset --mixed</span>
                        <code>git restore --staged</code> file does roughly what <code>git reset</code> file used to do —
                        unstage a file without touching your edits. The difference is scope: <code>reset</code> can also
                        delete whole commits from your branch, while <code>restore</code> only ever touches the
                        uncommitted changes in the files.
                    </div>

                    <h3>Key characteristics of Git Restore</h3>
                    <ul>
                        <li><strong>Never touches commit history</strong> — branch is never affected</li>
                        <li><strong>File-scoped</strong> — you target specific files or paths, not the whole commit graph</li>
                        <li><strong>Two targets</strong> — the working directory (default) or the staging area (<code>--staged</code>)</li>
                        <li><strong>Destructive to uncommitted edits</strong> — discarded working directory changes cannot be recovered</li>
                    </ul>
                </section>

                {/* ── SECTION 5 — COMPARISON TABLE ── */}
                <section className="blog-section">
                    <h2>Reset vs Revert vs Restore — Side-by-Side Comparison</h2>
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Git Reset</th>
                                <th>Git Revert</th>
                                <th>Git Restore</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>What it operates on</td>
                                <td>Commits (deletes them), staging area, working directory</td>
                                <td>Commit history (via a new commit)</td>
                                <td>Working directory or staging area</td>
                            </tr>
                            <tr>
                                <td>Rewrites history?</td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>No — history isn&apos;t touched at all</td>
                            </tr>
                            <tr>
                                <td>Creates a new commit?</td>
                                <td>No</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>Safe on shared/pushed branches?</td>
                                <td>No — avoid after pushing</td>
                                <td>Yes — the standard safe undo</td>
                                <td>Yes — only affects your local uncommitted changes</td>
                            </tr>
                            <tr>
                                <td>Can permanently delete work?</td>
                                <td>Yes (with <code>--hard</code>)</td>
                                <td>No</td>
                                <td>Yes (discarded working directory edits)</td>
                            </tr>
                            <tr>
                                <td>Typical scope</td>
                                <td>Whole commits</td>
                                <td>A single commit&apos;s changes</td>
                                <td>Individual files</td>
                            </tr>
                            <tr>
                                <td>Best for</td>
                                <td>Undoing local, unpushed commits</td>
                                <td>Undoing a commit that is already public</td>
                                <td>Throwing away uncommitted edits or unstaging a file</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* ── SECTION 6 — WHEN TO USE EACH ── */}
                <section className="blog-section">
                    <h2>When to Use Git Reset</h2>
                    <ul>
                        <li>Undoing your <strong>most recent local commits</strong> before anyone else has pulled them</li>
                        <li>Collapsing several unpushed &quot;WIP&quot; commits back into staged changes with <code>--soft</code></li>
                        <li>Throwing away a local experiment entirely with <code>--hard</code></li>
                        <li>Never on a branch you have already pushed and shared, unless you fully understand the force-push consequences</li>
                    </ul>

                    <h2>When to Use Git Revert</h2>
                    <ul>
                        <li>Undoing a commit that has <strong>already been pushed</strong> to a shared branch</li>
                        <li>Rolling back a bad release or hotfix while keeping a clear audit trail of what happened</li>
                        <li>Any time you want the undo itself to be reviewable, e.g. through a pull request</li>
                    </ul>

                    <h2>When to Use Git Restore</h2>
                    <ul>
                        <li>Discarding local edits to a file you decided not to keep</li>
                        <li>Unstaging a file you added with <code>git add</code> by mistake</li>
                        <li>Recovering a single file back to how it looked at an earlier commit, without affecting anything else</li>
                    </ul>

                    <div className="tip-box">
                        <span className="tip-label">💡 Golden Rule</span>
                        If the commit has been pushed and someone else might have it, <strong>revert</strong>. If it is
                        still local and only yours, <strong>reset</strong>. If nothing has been committed yet,{' '}
                        <strong>restore</strong>.
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <dl>
                        {[
                            {
                                q: "What is the difference between git reset, git revert, and git restore?",
                                a: "Git reset deletes commits from your current branch, moving it back to an earlier point in history, and optionally changes the staging area and working directory too. Git revert creates a new commit that undoes the changes of a previous commit, without deleting anything. Git restore discards changes in the working directory or staging area for specific files, without touching commit history at all."
                            },
                            {
                                q: "When should I use git revert instead of git reset?",
                                a: "Use git revert when the commit you want to undo has already been pushed or shared with other people. Revert adds a new commit instead of rewriting history, so it is safe on shared branches. Use git reset only on local, unpushed commits that nobody else has pulled."
                            },
                            {
                                q: "What is the difference between git reset --soft, --mixed, and --hard?",
                                a: "git reset --soft deletes the commit(s) but keeps all their changes staged, ready to re-commit. git reset --mixed (the default) deletes the commit(s) and unstages the changes, but keeps them in your working directory. git reset --hard deletes the commit(s) and discards all staged and working directory changes permanently."
                            },
                            {
                                q: "Why did Git introduce git restore if git checkout already existed?",
                                a: "Git checkout historically did too many unrelated things: switching branches, restoring files, and detaching HEAD. Git 2.23 split this into two dedicated commands — git switch for changing branches, and git restore for discarding file changes — making each command's purpose explicit."
                            },
                            {
                                q: "Can I undo a git reset --hard?",
                                a: "Often yes, as long as the commit still exists in Git's reflog. Running git reflog shows recent HEAD movements, and you can recover the lost commit with git reset --hard <commit-hash>. However, uncommitted working directory changes discarded by --hard are gone for good."
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
