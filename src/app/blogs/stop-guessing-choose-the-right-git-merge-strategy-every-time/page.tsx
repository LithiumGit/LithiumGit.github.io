import { Config } from '../../../config';
import { IMetadataParams } from '../../../lib/interfaces';
import { UiUtils } from '../../../lib/utilities/UiUtils';
import '../../styles/blogs/git_merge_strategies.scss';

import beforeFastForward from '../../images/blog/merge_stategies/before_merge_fast_forward.png';
import afterFastForward from '../../images/blog/merge_stategies/after_merge_fast_forward.png';
import beforeNonFastForward from '../../images/blog/merge_stategies/before_merge_non_fast_forward.png';
import afterNonFastForward from '../../images/blog/merge_stategies/after_merge_non_fast_forward.png';
import beforeOctopus from '../../images/blog/merge_stategies/before_merge_octopus.png';
import afterOctopus from '../../images/blog/merge_stategies/after_merge_octopus.png';
import beforeOurs from '../../images/blog/merge_stategies/before_merge_ours.png';
import afterOurs from '../../images/blog/merge_stategies/after_merge_ours.png';
import beforeSquash from '../../images/blog/merge_stategies/before_merge_squash.png';
import afterSquash from '../../images/blog/merge_stategies/after_merge_squash.png';
import beforeSubtree from '../../images/blog/merge_stategies/before_merge_subtree.png';
import afterSubtree from '../../images/blog/merge_stategies/after_merge_subtree.png';

const PAGE_URL = "https://lithiumgit.com/blogs/stop-guessing-choose-the-right-git-merge-strategy-every-time";
const DATE_PUBLISHED = "2026-05-31";
const DATE_MODIFIED = Config.PublishedDate;
const CURRENT_YEAR = new Date().getFullYear();

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "headline": `Stop Guessing: Choose the Right Git Merge Strategy Every Time (${CURRENT_YEAR})`,
    "description": "A comprehensive visual guide to every Git merge strategy — fast-forward, ort, recursive, resolve, subtree, octopus, ours, and squash — explaining when and how to use each one.",
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
    "keywords": "git merge strategies, fast forward merge, git ort strategy, git recursive merge, git resolve strategy, git subtree merge, git octopus merge, git ours strategy, git squash merge, LithiumGit",
    "wordCount": 2200,
    "inLanguage": "en-US",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lithiumgit.com" },
        { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://lithiumgit.com/blogs" },
        { "@type": "ListItem", "position": 3, "name": "Git Merge Strategies", "item": PAGE_URL },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "What are the different Git merge strategies?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Git supports several merge strategies: fast-forward (no merge commit when history is linear), ort (default since Git 2.33, optimised recursive), recursive (default before Git 2.33), resolve (three-way merge for two heads), subtree (merges into a subdirectory), octopus (merges more than two branches at once), ours (keeps your branch content entirely), and squash (squashes all commits into one before merging)."
            }
        },
        {
            "@type": "Question",
            "name": "What is the default Git merge strategy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Since Git 2.33, the default merge strategy is 'ort' (Ostensibly Recursive's Twin), which replaced the older 'recursive' strategy. It is faster and handles corner cases more reliably."
            }
        },
        {
            "@type": "Question",
            "name": "What is the difference between git merge --squash and a regular merge?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Git merge --squash collapses all commits from the source branch into a single staged change on your current branch. You then create one clean commit manually. A regular merge preserves every individual commit from both branches and creates a merge commit."
            }
        },
        {
            "@type": "Question",
            "name": "When should I use the 'ours' merge strategy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use the 'ours' strategy when you want to record that a merge happened (for history and tracking purposes) but intentionally want to discard all changes from the other branch, keeping only the content of your current branch."
            }
        },
        {
            "@type": "Question",
            "name": "What is the octopus merge strategy in Git?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The octopus strategy merges more than two branches in a single operation. It is automatically selected when you specify more than two branches in a git merge command. It produces a single merge commit with multiple parents and is best used for integrating independent feature branches that do not conflict."
            }
        },
        {
            "@type": "Question",
            "name": "How do I choose a Git merge strategy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "For most everyday merges, the default ort/recursive strategy is the right choice. Use fast-forward when you want a clean linear history. Use squash to condense noisy feature-branch commits. Use ours to record a merge without taking any changes. Use octopus to merge multiple independent branches at once. Use subtree when integrating an external project into a subdirectory."
            }
        }
    ]
};

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args, "blogs/stop-guessing-choose-the-right-git-merge-strategy-every-time");
    data.title = `Stop Guessing: Choose the Right Git Merge Strategy Every Time (${CURRENT_YEAR})`;
    data.description = `A complete guide to all Git merge strategies — fast-forward, ort, recursive, resolve, subtree, octopus, ours, and squash — with visual examples in LithiumGit. Know exactly which strategy to use and when in ${CURRENT_YEAR}.`;
    data.keywords = `git merge strategies, git merge strategy, fast forward merge git, git ort strategy, git recursive merge strategy, git resolve strategy, git subtree merge, git octopus merge, git ours strategy, git squash merge, git merge --squash, git merge --no-ff, which git merge strategy to use, git merge strategies explained, git merge strategy comparison, LithiumGit merge, git GUI client, git merge tutorial`;
    data.openGraph = {
        ...data.openGraph,
        title: `Stop Guessing: Choose the Right Git Merge Strategy Every Time (${CURRENT_YEAR})`,
        description: `Master every Git merge strategy with clear visual examples using LithiumGit. Fast-forward, ort, recursive, resolve, subtree, octopus, ours, squash — all explained.`,
        type: 'article',
        url: PAGE_URL,
        images: [
            {
                url: 'https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png',
                width: 512,
                height: 512,
                alt: 'LithiumGit — Git Merge Strategies Guide',
            },
        ],
        // @ts-ignore
        publishedTime: DATE_PUBLISHED,
        modifiedTime: DATE_MODIFIED,
        section: 'Git Tutorials',
        tags: ['git merge strategies', 'git merge', 'git squash', 'git rebase', 'version control', 'LithiumGit'],
    };
    (data as any).twitter = {
        card: 'summary_large_image',
        title: `Stop Guessing: Choose the Right Git Merge Strategy Every Time (${CURRENT_YEAR})`,
        description: `All Git merge strategies explained with visual examples — fast-forward, ort, recursive, resolve, subtree, octopus, ours, squash. Know which to use and when.`,
        images: ['https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png'],
    };
    (data as any).robots = { index: true, follow: true, googleBot: { index: true, follow: true } };
    return data;
}

export default function GitMergeStrategies() {
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
                    <h1>Stop Guessing: Choose the Right Git Merge Strategy Every Time</h1>
                    <p className="blog-meta">Published <time dateTime={DATE_PUBLISHED}>{DATE_PUBLISHED}</time> &nbsp;·&nbsp; LithiumGit Team &nbsp;·&nbsp; 12 min read</p>
                </div>

                <p className="blog-intro">
                    Every time you run <code>git merge</code>, Git silently picks a strategy to combine your branches.
                    Most developers never think about it — and that&apos;s exactly why merges sometimes produce unexpected
                    results. Git ships with eight merge strategies: <strong>fast-forward</strong>, <strong>ort</strong>,{' '}
                    <strong>recursive</strong>, <strong>resolve</strong>, <strong>subtree</strong>,{' '}
                    <strong>octopus</strong>, <strong>ours</strong>, and <strong>squash</strong>. Each one is designed
                    for a specific situation. This guide explains all of them with clear visual examples,
                    so you can stop guessing and start choosing the right strategy every time.
                </p>

                {/* ── OVERVIEW TABLE ── */}
                <section className="blog-section">
                    <h2>Quick Reference: All Git Merge Strategies at a Glance</h2>
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Strategy</th>
                                <th>Merge Commit?</th>
                                <th>Rewrites History?</th>
                                <th>Best For</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Fast-Forward</strong></td>
                                <td>No</td>
                                <td>No</td>
                                <td>Linear, up-to-date branches</td>
                            </tr>
                            <tr>
                                <td><strong>ORT</strong> (default)</td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>Everyday two-branch merges (Git ≥ 2.33)</td>
                            </tr>
                            <tr>
                                <td><strong>Recursive</strong></td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>Everyday two-branch merges (Git &lt; 2.33)</td>
                            </tr>
                            <tr>
                                <td><strong>Resolve</strong></td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>Simple two-branch merges, criss-cross histories</td>
                            </tr>
                            <tr>
                                <td><strong>Subtree</strong></td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>Merging an external project into a subdirectory</td>
                            </tr>
                            <tr>
                                <td><strong>Octopus</strong></td>
                                <td>Yes (multi-parent)</td>
                                <td>No</td>
                                <td>Merging 2+ independent feature branches at once</td>
                            </tr>
                            <tr>
                                <td><strong>Ours</strong></td>
                                <td>Yes</td>
                                <td>No</td>
                                <td>Recording a merge while discarding incoming changes</td>
                            </tr>
                            <tr>
                                <td><strong>Squash</strong></td>
                                <td>No (staged only)</td>
                                <td>Yes (commits collapsed)</td>
                                <td>Condensing noisy feature-branch history</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* ── STRATEGY 1: FAST-FORWARD ── */}
                <section className="blog-section">
                    <h2>1. Fast-Forward Merge</h2>
                    <div className="concept-box">
                        <strong>What it does</strong>
                        Moves the current branch pointer forward to match the source branch — no new commit is created.
                        Only possible when the current branch has no new commits since the source diverged.
                    </div>
                    <p>
                        A fast-forward merge is the simplest possible merge. When your branch has not diverged from the
                        source — meaning every commit on your branch is already reachable from the source — Git simply
                        advances your branch pointer. The result is a perfectly <strong>linear history</strong> with no
                        merge commit at all.
                    </p>

                    <h3>Before and after a fast-forward merge</h3>
                    <div className="blog-image-row">
                        <div className="blog-image-block">
                            <img
                                src={beforeFastForward.src}
                                alt="LithiumGit graph showing a branch eligible for fast-forward merge"
                            />
                            <p className="image-caption">Before — feature branch is directly ahead of master</p>
                        </div>
                        <div className="blog-image-block">
                            <img
                                src={afterFastForward.src}
                                alt="LithiumGit graph after fast-forward merge showing linear history"
                            />
                            <p className="image-caption">After — master pointer moves forward, no merge commit</p>
                        </div>
                    </div>

                    <h3>Git CLI command</h3>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Fast-forward is Git's default when possible`}</span>{`
`}<span className="cli-cmd">{`git checkout master`}</span>{`
`}<span className="cli-cmd">{`git merge feature`}</span>{`

`}<span className="cli-comment">{`# To reject the merge if fast-forward is not possible, use --ff-only`}</span>{`
`}<span className="cli-cmd">{`git merge --ff-only feature`}</span>
                        </pre>
                    </div>

                    <h3>When to use fast-forward</h3>
                    <ul>
                        <li>Integrating a <strong>short-lived local branch</strong> that nobody else has used</li>
                        <li>When you want a <strong>clean linear history</strong> with no merge commit noise</li>
                        <li>Pulling the latest commits from a remote when your local branch has no new work</li>
                    </ul>
                    <div className="tip-box">
                        <span className="tip-label">💡 Tip</span>
                        Use <code>--no-ff</code> on important feature branches to force Git to always create a
                        merge commit, even when a fast-forward would have been possible. In this case, Git falls back
                        to its default merge strategy — <strong>ORT</strong> (or <strong>recursive</strong> on Git
                        older than 2.33) — to produce the merge commit. This ensures there is always a visible merge
                        event in the log, clearly marking when and where the branch was integrated.
                    </div>
                </section>

                {/* ── STRATEGY 2: ORT ── */}
                <section className="blog-section">
                    <h2>2. ORT Strategy (Default since Git 2.33)</h2>
                    <div className="concept-box">
                        <strong>What it does</strong>
                        Performs a three-way merge between two diverged branches and creates a merge commit.
                        ORT (Ostensibly Recursive&apos;s Twin) is the modern replacement for the recursive strategy,
                        with better performance and improved conflict handling.
                    </div>
                    <p>
                        Since Git 2.33 (released August 2021), <strong>ORT is the default merge strategy</strong> for
                        merging two branches. You rarely need to specify it explicitly — it is what Git uses
                        automatically when you run <code>git merge</code> on diverged branches. It resolves conflicts
                        using a virtual merge base when histories have criss-crossed, which avoids spurious conflicts
                        that older strategies could introduce.
                    </p>

                    <h3>Before and after an ORT merge</h3>
                    <div className="blog-image-row">
                        <div className="blog-image-block">
                            <img
                                src={beforeNonFastForward.src}
                                alt="LithiumGit graph showing two diverged branches before ORT merge"
                            />
                            <p className="image-caption">Before — two branches have diverged from a common ancestor</p>
                        </div>
                        <div className="blog-image-block">
                            <img
                                src={afterNonFastForward.src}
                                alt="LithiumGit graph after ORT merge showing a merge commit"
                            />
                            <p className="image-caption">After — a merge commit with two parents joins the branches</p>
                        </div>
                    </div>

                    <h3>Git CLI command</h3>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# ORT is used automatically — no flag needed on Git >= 2.33`}</span>{`
`}<span className="cli-cmd">{`git checkout master`}</span>{`
`}<span className="cli-cmd">{`git merge feature`}</span>{`

`}<span className="cli-comment">{`# To specify ORT explicitly`}</span>{`
`}<span className="cli-cmd">{`git merge -s ort feature`}</span>
                        </pre>
                    </div>

                    <h3>When to use ORT</h3>
                    <ul>
                        <li>Virtually <strong>every standard two-branch merge</strong> — it is the default for a reason</li>
                        <li>Repositories that were previously experiencing <strong>spurious conflicts</strong> with the recursive strategy</li>
                        <li>Large repositories where merge performance matters</li>
                    </ul>
                </section>

                {/* ── STRATEGY 3: RECURSIVE ── */}
                <section className="blog-section">
                    <h2>3. Recursive Strategy</h2>
                    <div className="concept-box">
                        <strong>What it does</strong>
                        The predecessor to ORT. Uses a recursive three-way merge that handles criss-cross merge
                        histories by building a virtual merge base. Was Git&apos;s default strategy before Git 2.33.
                    </div>
                    <p>
                        The recursive strategy was Git&apos;s default merge strategy from version 1.0 all the way
                        until Git 2.33. It performs a <strong>three-way merge</strong> between two branch tips and their
                        common ancestor. When there are multiple merge bases (criss-cross merges), it recursively merges
                        them to create a virtual merge base. In modern Git, ORT supersedes it — but recursive remains
                        available and behaves identically in most real-world scenarios.
                    </p>

                    <h3>Before and after a recursive merge</h3>
                    <div className="blog-image-row">
                        <div className="blog-image-block">
                            <img
                                src={beforeNonFastForward.src}
                                alt="LithiumGit graph showing two diverged branches before recursive merge"
                            />
                            <p className="image-caption">Before — two branches diverged from a common base commit</p>
                        </div>
                        <div className="blog-image-block">
                            <img
                                src={afterNonFastForward.src}
                                alt="LithiumGit graph after recursive merge showing merged history"
                            />
                            <p className="image-caption">After — a merge commit ties the two histories together</p>
                        </div>
                    </div>

                    <h3>Git CLI command</h3>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Specify recursive explicitly (default on Git < 2.33)`}</span>{`
`}<span className="cli-cmd">{`git merge -s recursive feature`}</span>{`

`}<span className="cli-comment">{`# Recursive also accepts strategy options, e.g. prefer 'ours' on conflicts`}</span>{`
`}<span className="cli-cmd">{`git merge -s recursive -X ours feature`}</span>
                        </pre>
                    </div>

                    <h3>When to use recursive</h3>
                    <ul>
                        <li>You are on <strong>Git older than 2.33</strong> and need the default strategy behaviour</li>
                        <li>You need to pass <strong>strategy options</strong> (<code>-X ours</code>, <code>-X theirs</code>, <code>-X patience</code>) that you are used to pairing with recursive</li>
                        <li>In CI pipelines pinned to older Git versions</li>
                    </ul>
                </section>

                {/* ── STRATEGY 4: RESOLVE ── */}
                <section className="blog-section">
                    <h2>4. Resolve Strategy</h2>
                    <div className="concept-box">
                        <strong>What it does</strong>
                        A simpler three-way merge between exactly two branches. Unlike recursive, it does not attempt
                        to build a virtual merge base when criss-cross histories exist — it just picks one base and
                        proceeds. Faster but riskier in complex histories.
                    </div>
                    <p>
                        The resolve strategy is Git&apos;s older, simpler merge algorithm. It merges exactly two branch
                        tips using a single merge base. When multiple merge bases exist (a criss-cross history pattern),
                        resolve picks one of them and may silently discard changes that recursive or ORT would handle
                        correctly. Use it only when you understand your repository&apos;s history structure and need
                        the speed benefit.
                    </p>

                    <h3>Before and after a resolve merge</h3>
                    <div className="blog-image-row">
                        <div className="blog-image-block">
                            <img
                                src={beforeNonFastForward.src}
                                alt="LithiumGit graph showing two branches before resolve merge"
                            />
                            <p className="image-caption">Before — two diverged branches, single common ancestor</p>
                        </div>
                        <div className="blog-image-block">
                            <img
                                src={afterNonFastForward.src}
                                alt="LithiumGit graph after resolve merge"
                            />
                            <p className="image-caption">After — standard merge commit produced by the resolve strategy</p>
                        </div>
                    </div>

                    <h3>Git CLI command</h3>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Use the resolve strategy explicitly`}</span>{`
`}<span className="cli-cmd">{`git merge -s resolve feature`}</span>
                        </pre>
                    </div>

                    <h3>When to use resolve</h3>
                    <ul>
                        <li>Repositories with a <strong>simple, non-criss-crossed history</strong> where you want a slightly faster merge</li>
                        <li>When you have previously hit edge-case bugs in the recursive strategy and want a more conservative algorithm</li>
                        <li>Rarely needed — prefer ORT or recursive in most cases</li>
                    </ul>
                </section>

                {/* ── STRATEGY 5: SUBTREE ── */}
                <section className="blog-section">
                    <h2>5. Subtree Strategy</h2>
                    <div className="concept-box">
                        <strong>What it does</strong>
                        An extension of recursive that automatically adjusts the tree structure of the source branch
                        to match a subdirectory in your repository. Used for merging an external project into a
                        subdirectory of your own project.
                    </div>
                    <p>
                        The subtree strategy is used when you want to incorporate another repository (or branch) into
                        a <strong>subdirectory</strong> of your current project rather than at the root. Git
                        automatically detects the path prefix and adjusts the merge accordingly. This is an alternative
                        to git submodules for embedding external dependencies directly into your repository tree.
                    </p>

                    <h3>Before and after a subtree merge</h3>
                    <div className="blog-image-row">
                        <div className="blog-image-block">
                            <img
                                src={beforeSubtree.src}
                                alt="LithiumGit graph showing origin/master and lib-remote/master as two unrelated histories before a subtree merge"
                            />
                            <p className="image-caption">Before — two unrelated histories: origin/master and the external lib-remote/master</p>
                        </div>
                        <div className="blog-image-block">
                            <img
                                src={afterSubtree.src}
                                alt="LithiumGit graph after subtree merge showing lib-remote history merged into origin/master"
                            />
                            <p className="image-caption">After — lib-remote history merged into origin/master under a subdirectory</p>
                        </div>
                    </div>

                    <h3>Git CLI command</h3>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Add the external repository as a remote`}</span>{`
`}<span className="cli-cmd">{`git remote add lib-remote https://github.com/example/lib.git`}</span>{`
`}<span className="cli-cmd">{`git fetch lib-remote`}</span>{`

`}<span className="cli-comment">{`# Merge using the subtree strategy, placing it under 'libs/my-lib'`}</span>{`
`}<span className="cli-cmd">{`git merge -s subtree --allow-unrelated-histories lib-remote/master`}</span>{`

`}<span className="cli-comment">{`# Or use the subtree option with recursive to specify a prefix explicitly`}</span>{`
`}<span className="cli-cmd">{`git merge -s recursive -X subtree=libs/my-lib lib-remote/master`}</span>
                        </pre>
                    </div>

                    <h3>When to use subtree</h3>
                    <ul>
                        <li>Embedding a <strong>third-party library or tool</strong> directly into your repository</li>
                        <li>Importing a project from another repository into a <strong>specific subdirectory</strong></li>
                        <li>When you want to avoid the overhead of git submodules while still tracking upstream changes</li>
                    </ul>
                </section>

                {/* ── STRATEGY 6: OCTOPUS ── */}
                <section className="blog-section">
                    <h2>6. Octopus Strategy</h2>
                    <div className="concept-box">
                        <strong>What it does</strong>
                        Merges <em>three or more branches</em> in a single operation, producing a single merge commit
                        with multiple parents. Automatically selected by Git when you specify more than two branch
                        names in a merge command.
                    </div>
                    <p>
                        The octopus strategy is Git&apos;s way of merging many branches at once. Instead of merging
                        them one at a time (which would create a chain of merge commits), octopus combines them all
                        into a <strong>single multi-parent commit</strong>. It is intentionally designed for situations
                        where the branches being merged are independent and do not conflict — if there are conflicts,
                        Git will refuse the octopus merge and ask you to resolve them branch-by-branch.
                    </p>

                    <h3>Before and after an octopus merge</h3>
                    <div className="blog-image-row">
                        <div className="blog-image-block">
                            <img
                                src={beforeOctopus.src}
                                alt="LithiumGit graph showing feature1 and feature2 branches diverged from master before an octopus merge"
                            />
                            <p className="image-caption">Before — feature1 and feature2 branches diverged from master, ready to merge</p>
                        </div>
                        <div className="blog-image-block">
                            <img
                                src={afterOctopus.src}
                                alt="LithiumGit graph after octopus merge showing feature1 and feature2 merged into master in a single multi-parent commit"
                            />
                            <p className="image-caption">After — feature1 and feature2 merged into master in one merge commit with multiple parents</p>
                        </div>
                    </div>

                    <h3>Git CLI command</h3>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Merge feature1 and feature2 into master (octopus is auto-selected)`}</span>{`
`}<span className="cli-cmd">{`git checkout master`}</span>{`
`}<span className="cli-cmd">{`git merge feature1 feature2`}</span>{`

`}<span className="cli-comment">{`# Or specify the strategy explicitly`}</span>{`
`}<span className="cli-cmd">{`git merge -s octopus feature1 feature2`}</span>
                        </pre>
                    </div>

                    <h3>When to use octopus</h3>
                    <ul>
                        <li>Integrating <strong>multiple independent, non-conflicting feature branches</strong> in a single step</li>
                        <li>Topic-branch workflows where several small branches are ready to land simultaneously</li>
                        <li>When you want to avoid a chain of merge commits and prefer a single multi-parent node in the graph</li>
                    </ul>
                    <div className="tip-box">
                        <span className="tip-label">⚠️ Limitation</span>
                        Octopus merges abort when any conflicts are detected. If branches have overlapping changes,
                        merge them individually so you can resolve conflicts one at a time.
                    </div>
                </section>

                {/* ── STRATEGY 7: OURS ── */}
                <section className="blog-section">
                    <h2>7. Ours Strategy</h2>
                    <div className="concept-box">
                        <strong>What it does</strong>
                        Records that a merge happened — creating a proper merge commit — but <em>entirely discards</em>
                        all content from the other branch. Your branch&apos;s tree is preserved as-is.
                    </div>
                    <p>
                        The ours strategy is deceptively named. It does not simply prefer your changes in a conflict —
                        it <strong>ignores all changes from the other branch completely</strong>. The merge commit is
                        recorded in history (so tools and scripts that trace merges work correctly), but the resulting
                        working tree is identical to what your branch already had.
                    </p>
                    <p>
                        This is different from the <code>-X ours</code> strategy option (which resolves individual
                        file conflicts in your favour). The <code>-s ours</code> <em>strategy</em> discards the
                        entire incoming branch, not just conflicting hunks.
                    </p>

                    <h3>Before and after an ours merge</h3>
                    <div className="blog-image-row">
                        <div className="blog-image-block">
                            <img
                                src={beforeOurs.src}
                                alt="LithiumGit graph showing feature branch diverged from master before the ours merge strategy"
                            />
                            <p className="image-caption">Before — feature branch diverged from master; feature's changes will be discarded</p>
                        </div>
                        <div className="blog-image-block">
                            <img
                                src={afterOurs.src}
                                alt="LithiumGit graph after ours merge — merge commit recorded on master but feature branch changes discarded"
                            />
                            <p className="image-caption">After — merge commit recorded on master; feature branch changes discarded entirely</p>
                        </div>
                    </div>

                    <h3>Git CLI command</h3>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Merge feature into master but keep only master's content`}</span>{`
`}<span className="cli-cmd">{`git checkout master`}</span>{`
`}<span className="cli-cmd">{`git merge -s ours feature`}</span>{`

`}<span className="cli-comment">{`# Tip: do NOT confuse -s ours (strategy) with -X ours (strategy option)`}</span>{`
`}<span className="cli-comment">{`# -X ours resolves conflicts in your favour; -s ours discards everything from theirs`}</span>
                        </pre>
                    </div>

                    <h3>When to use ours</h3>
                    <ul>
                        <li><strong>Superseding an old branch</strong> — you want to record it as merged without pulling any of its changes in</li>
                        <li>Keeping a <strong>release branch in sync</strong> with master while intentionally ignoring hotfixes that were already handled differently</li>
                        <li>Marking a branch as &quot;done&quot; in history without integrating its work</li>
                    </ul>
                </section>

                {/* ── STRATEGY 8: SQUASH ── */}
                <section className="blog-section">
                    <h2>8. Squash Merge</h2>
                    <div className="concept-box">
                        <strong>What it does</strong>
                        Collapses all commits from the source branch into a single staged diff on your current branch.
                        You then create one clean commit manually. No merge commit is created — the source branch
                        history is not preserved in the target branch.
                    </div>
                    <p>
                        A squash merge takes every commit on the source branch and flattens them into a single
                        uncommitted change in your working tree. You then commit that change as one tidy commit.
                        This produces a <strong>clean, linear history</strong> on the target branch without cluttering
                        it with every incremental &quot;WIP&quot; or &quot;fix typo&quot; commit from the feature branch.
                    </p>
                    <p>
                        <strong>Important:</strong> because no real merge commit is created, Git does not record that
                        the source branch was merged. Running another squash merge from the same branch later will
                        bring in all commits again rather than just the new ones.
                    </p>

                    <h3>Before and after a squash merge</h3>
                    <div className="blog-image-row">
                        <div className="blog-image-block">
                            <img
                                src={beforeSquash.src}
                                alt="LithiumGit graph showing a feature branch with multiple commits before squash merge"
                            />
                            <p className="image-caption">Before — feature branch has 3 incremental commits</p>
                        </div>
                        <div className="blog-image-block">
                            <img
                                src={afterSquash.src}
                                alt="LithiumGit graph after squash merge showing a single clean commit on master"
                            />
                            <p className="image-caption">After — all commits squashed into one(M7) clean commit on master</p>
                        </div>
                    </div>

                    <h3>Git CLI command</h3>
                    <div className="cli-block">
                        <span className="cli-label">Terminal</span>
                        <pre>
                            <span className="cli-comment">{`# Stage all changes from the feature branch as a single diff`}</span>{`
`}<span className="cli-cmd">{`git checkout master`}</span>{`
`}<span className="cli-cmd">{`git merge --squash feature`}</span>{`

`}<span className="cli-comment">{`# Then commit the staged changes as one clean commit`}</span>{`
`}<span className="cli-cmd">{`git commit -m "feat: add my-feature"`}</span>
                        </pre>
                    </div>

                    <h3>When to use squash</h3>
                    <ul>
                        <li>Feature branches with a <strong>noisy commit history</strong> (many &quot;WIP&quot;, &quot;fix&quot;, &quot;oops&quot; commits)</li>
                        <li>Teams that enforce a <strong>one-commit-per-feature</strong> policy on the master branch</li>
                        <li>Pull requests where reviewers want to see <strong>one atomic change</strong> land on master</li>
                    </ul>
                    <div className="tip-box">
                        <span className="tip-label">💡 Squash vs Rebase</span>
                        Both squash and interactive rebase can produce a clean single commit, but they work differently.
                        Squash creates a brand new commit with no link to the original commits; interactive rebase lets
                        you rewrite individual commits before merging. For most teams, squash merge via a pull request
                        is the simpler, safer choice.
                    </div>
                </section>

                {/* ── STRATEGY COMPARISON ── */}
                <section className="blog-section">
                    <h2>Choosing the Right Strategy: Decision Guide</h2>
                    <p>Not sure which strategy to use? Work through these questions:</p>
                    <ol>
                        <li>
                            <strong>Are the histories linear (no divergence)?</strong> →
                            Use <strong>fast-forward</strong>. If you want a merge commit anyway, use <code>--no-ff</code>.
                        </li>
                        <li>
                            <strong>Merging two standard diverged branches?</strong> →
                            Use the <strong>default (ORT)</strong> — just run <code>git merge</code>.
                        </li>
                        <li>
                            <strong>Merging three or more independent branches?</strong> →
                            Use <strong>octopus</strong>.
                        </li>
                        <li>
                            <strong>Want a single clean commit on master?</strong> →
                            Use <strong>squash</strong>.
                        </li>
                        <li>
                            <strong>Want to record a merge but throw away all incoming changes?</strong> →
                            Use <strong>ours</strong>.
                        </li>
                        <li>
                            <strong>Merging an external project into a subdirectory?</strong> →
                            Use <strong>subtree</strong>.
                        </li>
                        <li>
                            <strong>On old Git or need recursive-specific options?</strong> →
                            Use <strong>recursive</strong> explicitly.
                        </li>
                    </ol>
                </section>

                {/* ── FAQ ── */}
                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <dl>
                        {[
                            {
                                q: "What are the different Git merge strategies?",
                                a: "Git supports several merge strategies: fast-forward (no merge commit when history is linear), ort (default since Git 2.33), recursive (default before Git 2.33), resolve (simpler three-way merge), subtree (merges into a subdirectory), octopus (merges 3+ branches at once), ours (keeps your branch content, discards incoming), and squash (collapses all commits into one staged diff)."
                            },
                            {
                                q: "What is the default Git merge strategy?",
                                a: "Since Git 2.33, the default merge strategy is 'ort' (Ostensibly Recursive's Twin), which replaced 'recursive'. It is faster and handles corner cases more reliably. You rarely need to specify it explicitly."
                            },
                            {
                                q: "What is the difference between git merge --squash and a regular merge?",
                                a: "Git merge --squash collapses all commits from the source branch into a single staged change on your current branch. You then create one clean commit manually. A regular merge preserves every individual commit and creates a merge commit."
                            },
                            {
                                q: "When should I use the 'ours' merge strategy?",
                                a: "Use 'ours' when you want to record that a merge happened for tracking purposes but intentionally want to discard all changes from the other branch, keeping only the content of your current branch."
                            },
                            {
                                q: "What is the octopus merge strategy in Git?",
                                a: "The octopus strategy merges more than two branches in a single operation, producing a single merge commit with multiple parents. It is automatically selected when you specify more than two branch names in a git merge command."
                            },
                            {
                                q: "How do I choose a Git merge strategy?",
                                a: "For most everyday merges, the default ort/recursive strategy is the right choice. Use fast-forward for a clean linear history. Use squash to condense noisy feature-branch commits. Use ours to record a merge without taking any changes. Use octopus to merge multiple independent branches at once. Use subtree when integrating an external project into a subdirectory."
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
