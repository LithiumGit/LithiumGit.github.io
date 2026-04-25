import { Config } from '../../../config';
import { IMetadataParams } from '../../../lib/interfaces';
import { UiUtils } from '../../../lib/utilities/UiUtils';
import '../../styles/blog.scss';

import beforeMerge from '../../images/blog/merge/before_merge.PNG';
import mergeAction from '../../images/blog/merge/merge_action.PNG';
import afterMergePreview from '../../images/blog/merge/after_merge_preview.PNG';
import afterMergeFinalised from '../../images/blog/merge/after_merge_finalised.PNG';
import beforeRebase from '../../images/blog/rebase/before_rebase.PNG';
import rebaseAction from '../../images/blog/rebase/rebase_action.PNG';
import afterRebase from '../../images/blog/rebase/after_rebase.PNG';

const PAGE_URL = "https://lithiumgit.com/blogs/git-rebase-vs-merge";
const DATE_PUBLISHED = "2026-04-25";
const DATE_MODIFIED = Config.PublishedDate;
const CURRENT_YEAR = new Date().getFullYear();

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Git Rebase vs Merge — What's the Difference and When to Use Each (${CURRENT_YEAR})`,
    "description": "A clear, visual guide explaining the difference between git merge and git rebase, when to use each, and how to perform both operations in LithiumGit.",
    "url": PAGE_URL,
    "datePublished": DATE_PUBLISHED,
    "dateModified": DATE_MODIFIED,
    "author": { "@type": "Organization", "name": "LithiumGit" },
    "publisher": { "@type": "Organization", "name": "LithiumGit", "url": "https://lithiumgit.com" },
    "image": "https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What is the difference between git merge and git rebase?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Git merge combines two branches by creating a new merge commit that preserves the full history of both branches. Git rebase rewrites the commit history by moving your branch commits on top of another branch, producing a clean, linear history without a merge commit."
            }
        },
        {
            "@type": "Question",
            "name": "When should I use git merge instead of git rebase?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use git merge when integrating feature branches into master, when working in a team where others share the same branch, or when you want to preserve the exact history of when and how branches diverged."
            }
        },
        {
            "@type": "Question",
            "name": "When should I use git rebase instead of git merge?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use git rebase to update a feature branch with the latest changes from master before merging, to clean up a messy local commit history before sharing with the team, or when you prefer a linear, readable project history."
            }
        },
        {
            "@type": "Question",
            "name": "Does git rebase rewrite history?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Git rebase creates new commits with new hashes for every commit that is moved. This means it rewrites history. You should never rebase a branch that other developers are working on, as it will break their local copies."
            }
        },
        {
            "@type": "Question",
            "name": "How do I merge or rebase in LithiumGit?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "In LithiumGit, right-click on any branch in the interactive graph and choose Merge or Rebase from the context menu. LithiumGit provides a preview before finalising the operation and visual feedback on the resulting history."
            }
        }
    ]
};

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args, "blogs/git-rebase-vs-merge");
    data.title = `Git Rebase vs Merge — What's the Difference and When to Use Each (${CURRENT_YEAR})`;
    data.description = "A clear, visual guide explaining the difference between git merge and git rebase, when to use each, and how to perform both operations in LithiumGit.";
    data.keywords = `git merge vs rebase, git rebase vs merge, when to use git rebase, when to use git merge, git rebase explained, git merge explained, git rebase tutorial, git merge tutorial, LithiumGit merge, LithiumGit rebase`;
    data.openGraph!.title = `Git Rebase vs Merge — What's the Difference and When to Use Each`;
    data.openGraph!.description = "Learn the difference between git merge and git rebase with clear visual examples using LithiumGit. Know exactly when to use each.";
    (data as any).twitter = {
        ...(data as any).twitter,
        title: `Git Rebase vs Merge — What's the Difference and When to Use Each`,
        description: "Learn the difference between git merge and git rebase with clear visual examples using LithiumGit.",
    };
    return data;
}

export default function GitRebaseVsMerge() {
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
            <div className="content bg-second-color">

                <div className="blog-header">
                    <h1>Git Rebase vs Merge — What&apos;s the Difference and When to Use Each</h1>
                    <p className="blog-meta">Published {DATE_PUBLISHED} &nbsp;·&nbsp; LithiumGit Team &nbsp;·&nbsp; 8 min read</p>
                </div>

                <p className="blog-intro">
                    <strong>Git merge</strong> and <strong>git rebase</strong> are two of the most commonly confused
                    Git operations. Both achieve the same end goal — incorporating changes from one branch into another —
                    but they do it in fundamentally different ways, with very different effects on your project history.
                    Understanding the difference will make you a more confident developer and help you choose the right
                    tool for every situation.
                </p>

                {/* ── SECTION 1 — THE CORE CONCEPT ── */}
                <section className="blog-section">
                    <h2>The Core Difference in One Sentence</h2>
                    <div className="concept-box">
                        <strong>Git Merge</strong>
                        Creates a new &quot;merge commit&quot; that ties together two branch histories, preserving every
                        commit exactly as it happened.
                    </div>
                    <div className="concept-box">
                        <strong>Git Rebase</strong>
                        Moves (replays) your branch&apos;s commits on top of another branch, rewriting history to produce
                        a clean, straight line.
                    </div>
                    <p>
                        Think of merge as saying <em>&quot;these two histories joined here&quot;</em> and rebase as
                        saying <em>&quot;pretend I always branched from this point&quot;</em>.
                    </p>
                </section>

                {/* ── SECTION 2 — GIT MERGE ── */}
                <section className="blog-section">
                    <h2>Git Merge — Preserving History</h2>
                    <p>
                        When you do <code>git merge master</code> into your <code>feature</code> branch, Git finds the common
                        ancestor of both branches and creates a new <strong>merge commit</strong> at your <code>feature</code> branch with two parents.
                        Every original commit on both branches remains exactly intact.
                    </p>

                    <h3>What the graph looks like before merging</h3>
                    <p>
                        Below you can see two diverged branches in LithiumGit&apos;s interactive graph. We are
                        currently checked out to the <code>development</code> branch, which has commits that are ahead of <code>master</code>.
                    </p>
                    <div className="blog-image-block">
                        <img
                            src={beforeMerge.src}
                            alt="LithiumGit graph view showing two diverged branches before merging"
                        />
                        <p className="image-caption">LithiumGit graph — two branches diverged, ready to merge</p>
                    </div>

                    <h3>Initiating a merge in LithiumGit</h3>
                    <p>
                        In LithiumGit, right-click the branch you want to merge into your current branch on the
                        interactive graph, then select <strong>Merge</strong>. LithiumGit shows a preview of what the
                        resulting graph will look like before you confirm.
                    </p>
                    <div className="blog-image-row">
                        <div className="blog-image-block">
                            <img
                                src={mergeAction.src}
                                alt="Right-clicking a branch in LithiumGit to trigger the merge action"
                            />
                            <p className="image-caption">Right-click the branch → Merge</p>
                        </div>
                        <div className="blog-image-block">
                            <img
                                src={afterMergePreview.src}
                                alt="LithiumGit merge preview showing the resulting graph before finalising"
                            />
                            <p className="image-caption">LithiumGit shows a merge preview before confirming</p>
                        </div>
                    </div>

                    <h3>After the merge is finalised</h3>
                    <p>
                        Once confirmed, a new merge commit appears joining the two lines of history. The full commit
                        history from both branches is preserved.
                    </p>
                    <div className="blog-image-block">
                        <img
                            src={afterMergeFinalised.src}
                            alt="LithiumGit graph after merge commit is created, showing unified history"
                        />
                        <p className="image-caption">Graph after merge — a merge commit unifies both branches</p>
                    </div>

                    <h3>Key characteristics of Git Merge</h3>
                    <ul>
                        <li><strong>Non-destructive</strong> — existing commits are never modified</li>
                        <li><strong>History is preserved</strong> — you can see exactly when branches diverged and converged</li>
                        <li><strong>Creates a merge commit</strong> — the graph forms a diamond (fork → merge)</li>
                        <li><strong>Safe for shared branches</strong> — teammates&apos; local copies are not broken</li>
                        <li><strong>Can get noisy</strong> — frequent merges produce many merge commits in the log</li>
                    </ul>
                </section>

                {/* ── SECTION 3 — GIT REBASE ── */}
                <section className="blog-section">
                    <h2>Git Rebase — A Clean, Linear History</h2>
                    <p>
                        When you do <code>git rebase master</code> from your <code>feature</code> branch, Git takes
                        each commit on your branch, detaches them, and replays them one-by-one on top of the latest
                        commit in <code>master</code>. The result looks as if you started working from the very tip of
                        master — no merge commit, no diamond, just a straight line.
                    </p>
                    <p>
                        <strong>Important:</strong> because each commit is replayed, it gets a brand-new commit hash.
                        Rebase <em>rewrites history</em>. This is why you should never rebase a branch that other
                        developers are actively sharing.
                    </p>

                    <h3>Before rebasing</h3>
                    <p>
                        The graph below shows the same diverged state as before — we are checked out to <code>development</code>, which has commits that were made while <code>master</code> moved forward.
                    </p>
                    <div className="blog-image-block">
                        <img
                            src={beforeRebase.src}
                            alt="LithiumGit graph view showing two branches before rebasing"
                        />
                        <p className="image-caption">LithiumGit graph — checked out to development, which is behind master, ready to rebase</p>
                    </div>

                    <h3>Initiating a rebase in LithiumGit</h3>
                    <p>
                        Right-click the target branch (e.g. <code>master</code>) in LithiumGit&apos;s graph and select
                        <strong> Rebase</strong>. Git will replay your current branch&apos;s commits on top of it(<code>master</code>).
                    </p>
                    <div className="blog-image-block">
                        <img
                            src={rebaseAction.src}
                            alt="Right-clicking a branch in LithiumGit to trigger the rebase action"
                        />
                        <p className="image-caption">Right-click the target branch → Rebase</p>
                    </div>

                    <h3>After the rebase</h3>
                    <p>
                        The <code>development</code> branch commits have been replayed on top of <code>master</code>. The graph is now
                        perfectly linear — no merge commit, no fork shape, just a straight line of commits.
                    </p>
                    <div className="blog-image-block">
                        <img
                            src={afterRebase.src}
                            alt="LithiumGit graph after rebase showing a clean linear history"
                        />
                        <p className="image-caption">Graph after rebase — linear history with no merge commit</p>
                    </div>

                    <h3>Key characteristics of Git Rebase</h3>
                    <ul>
                        <li><strong>Linear history</strong> — produces a clean, straight commit log</li>
                        <li><strong>No merge commit</strong> — the graph stays uncluttered</li>
                        <li><strong>Rewrites history</strong> — commits get new hashes; do not rebase shared branches</li>
                        <li><strong>Easier to read with <code>git log</code></strong> — every commit has a single parent</li>
                        <li><strong>Can surface conflicts per-commit</strong> — you may need to resolve conflicts at each replayed commit</li>
                    </ul>
                </section>

                {/* ── SECTION 4 — COMPARISON TABLE ── */}
                <section className="blog-section">
                    <h2>Merge vs Rebase — Side-by-Side Comparison</h2>
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Git Merge</th>
                                <th>Git Rebase</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Creates a merge commit?</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>History shape</td>
                                <td>Non-linear (diamond)</td>
                                <td>Linear (straight line)</td>
                            </tr>
                            <tr>
                                <td>Rewrites commit hashes?</td>
                                <td>No</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Safe on shared branches?</td>
                                <td>Yes</td>
                                <td>No — avoid on shared branches</td>
                            </tr>
                            <tr>
                                <td>Preserves original timestamps?</td>
                                <td>Yes</td>
                                <td>No</td>
                            </tr>
                            <tr>
                                <td>Conflict resolution</td>
                                <td>Once, at merge commit</td>
                                <td>Per commit during replay</td>
                            </tr>
                            <tr>
                                <td>Best for</td>
                                <td>Integrating feature branches into master</td>
                                <td>Updating a local branch before merging</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* ── SECTION 5 — WHEN TO USE EACH ── */}
                <section className="blog-section">
                    <h2>When to Use Git Merge</h2>
                    <ul>
                        <li>Merging a completed <strong>feature branch into master</strong> — this is the most common use case</li>
                        <li>When you want to <strong>preserve an accurate record</strong> of when branches were integrated</li>
                        <li>On <strong>shared or public branches</strong> that other developers are also using</li>
                        <li>When the team follows a <strong>GitFlow</strong> or similar branch-based workflow</li>
                    </ul>

                    <h2>When to Use Git Rebase</h2>
                    <ul>
                        <li><strong>Updating your local feature branch</strong> with the latest commits from master before opening a pull request</li>
                        <li>Cleaning up a <strong>messy local commit history</strong> (with interactive rebase) before sharing with the team</li>
                        <li>When your team prefers a <strong>linear commit history</strong> in the project log</li>
                        <li>On branches that <strong>only you are working on</strong> and have not yet pushed publicly</li>
                    </ul>

                    <div className="tip-box">
                        <span className="tip-label">💡 Golden Rule of Rebasing</span>
                        Never rebase a branch that other people are working on. Once a branch is shared publicly
                        (pushed to a remote that others pull from), rewriting its history with rebase will cause
                        serious problems for your teammates.
                    </div>
                </section>

                {/* ── SECTION 6 — WORKFLOW EXAMPLE ── */}
                <section className="blog-section">
                    <h2>A Practical Workflow Using Both</h2>
                    <p>Many teams combine merge and rebase in a single workflow:</p>
                    <ol>
                        <li>Create a <code>feature</code> branch from <code>master</code> and do your work</li>
                        <li>When <code>master</code> has moved forward, <strong>rebase your feature branch onto master</strong> to pull in the latest changes and keep your branch up to date</li>
                        <li>Resolve any conflicts that arise during the rebase</li>
                        <li>Open a pull request — because your branch was rebased, it will fast-forward cleanly</li>
                        <li><strong>Merge the pull request</strong> into master (with or without a merge commit, depending on your team preference)</li>
                    </ol>
                    <p>
                        This approach gives you the best of both worlds: a clean, rebased history during development,
                        and a clear merge event recorded when the feature lands in master.
                    </p>
                </section>

                {/* ── FAQ ── */}
                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <dl>
                        {[
                            {
                                q: "What is the difference between git merge and git rebase?",
                                a: "Git merge combines two branches by creating a new merge commit that preserves the full history of both branches. Git rebase rewrites the commit history by moving your branch commits on top of another branch, producing a clean, linear history without a merge commit."
                            },
                            {
                                q: "When should I use git merge instead of git rebase?",
                                a: "Use git merge when integrating feature branches into master, when working in a team where others share the same branch, or when you want to preserve the exact history of when and how branches diverged."
                            },
                            {
                                q: "When should I use git rebase instead of git merge?",
                                a: "Use git rebase to update a feature branch with the latest changes from master before merging, to clean up a messy local commit history before sharing with the team, or when you prefer a linear, readable project history."
                            },
                            {
                                q: "Does git rebase rewrite history?",
                                a: "Yes. Git rebase creates new commits with new hashes for every commit that is moved. You should never rebase a branch that other developers are working on, as it will break their local copies."
                            },
                            {
                                q: "How do I merge or rebase in LithiumGit?",
                                a: "In LithiumGit, right-click on any branch in the interactive graph and choose Merge or Rebase from the context menu. LithiumGit provides a preview before finalising the merge operation and visual feedback on the resulting history."
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
