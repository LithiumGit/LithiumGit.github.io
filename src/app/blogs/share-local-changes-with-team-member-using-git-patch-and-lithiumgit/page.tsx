import { Config } from '../../../config';
import { IMetadataParams } from '../../../lib/interfaces';
import { UiUtils } from '../../../lib/utilities/UiUtils';
import '../../styles/blogs/git_rebase_vs_merge.scss';

import importExportAction from '../../images/blog/import_export_changes/import_export.png';
import savePatch from '../../images/blog/import_export_changes/save.png';
import selectPatchFile from '../../images/blog/import_export_changes/select_patch_file.png';

const PAGE_URL = "https://lithiumgit.com/blogs/share-local-changes-with-team-member-using-git-patch-and-lithiumgit";
const DATE_PUBLISHED = "2026-06-27";
const DATE_MODIFIED = Config.PublishedDate;
const CURRENT_YEAR = new Date().getFullYear();

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": { "@type": "WebPage", "@id": PAGE_URL },
    "headline": `Share Local Changes With a Team Member Using Git Patch and LithiumGit (${CURRENT_YEAR})`,
    "description": "A smart developer guide to sharing local, uncommitted changes with a teammate using git patch files and LithiumGit.",
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
    "keywords": "git patch, git diff patch, git apply patch, share local changes git, export git changes, import git patch, LithiumGit",
    "wordCount": 850,
    "inLanguage": "en-US",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lithiumgit.com" },
        { "@type": "ListItem", "position": 2, "name": "Blogs", "item": "https://lithiumgit.com/blogs" },
        { "@type": "ListItem", "position": 3, "name": "Git Patch Sharing", "item": PAGE_URL },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How do I share local changes without committing them?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Create a patch file with git diff > changes.patch, send the file to your teammate, and have them apply it with git apply changes.patch."
            }
        },
        {
            "@type": "Question",
            "name": "Can LithiumGit export and import patch files?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. LithiumGit lets developers export local changes to a patch file and import a patch file through its Git GUI workflow."
            }
        },
        {
            "@type": "Question",
            "name": "When should I use a git patch instead of pushing a branch?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use a patch when changes are local, experimental, small, or not ready for a remote branch. Use a branch or pull request for reviewed, permanent team work."
            }
        }
    ]
};

export function generateMetadata(args: IMetadataParams) {
    const data = UiUtils.getCommonHeaderInfo(args, "blogs/share-local-changes-with-team-member-using-git-patch-and-lithiumgit");
    data.title = `Share Local Changes With a Team Member Using Git Patch and LithiumGit (${CURRENT_YEAR})`;
    data.description = `Learn how to share local uncommitted changes with a teammate using git patch files, git apply, and LithiumGit's import/export workflow in ${CURRENT_YEAR}.`;
    data.keywords = `git patch, git diff patch, git apply patch, create git patch file, share local changes git, share uncommitted changes git, export git changes, import git patch, git patch workflow, LithiumGit patch, LithiumGit import export, git GUI client`;
    data.openGraph = {
        ...data.openGraph,
        title: `Share Local Changes With a Team Member Using Git Patch and LithiumGit (${CURRENT_YEAR})`,
        description: `A practical git patch workflow for sharing local changes before committing or pushing, with LithiumGit visual steps.`,
        type: 'article',
        url: PAGE_URL,
        images: [
            {
                url: 'https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png',
                width: 512,
                height: 512,
                alt: 'LithiumGit - Git Patch Sharing Guide',
            },
        ],
        // @ts-ignore
        publishedTime: DATE_PUBLISHED,
        modifiedTime: DATE_MODIFIED,
        section: 'Git Tutorials',
        tags: ['git patch', 'git apply', 'git diff', 'version control', 'LithiumGit'],
    };
    (data as any).twitter = {
        card: 'summary_large_image',
        title: `Share Local Changes With a Team Member Using Git Patch and LithiumGit (${CURRENT_YEAR})`,
        description: `Share uncommitted Git changes with a teammate using patch files and LithiumGit.`,
        images: ['https://github.com/LithiumGit/LithiumGit.github.io/releases/download/v1.0.0/icon.png'],
    };
    (data as any).robots = { index: true, follow: true, googleBot: { index: true, follow: true } };
    return data;
}

export default function ShareLocalChangesWithPatch() {
    return (
        <main className="blog-page">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <div className="content bg-second-color">
                <div className="blog-header">
                    <h1>Share Your Local Changes With a Team Member</h1>
                    <p className="blog-meta">Published <time dateTime={DATE_PUBLISHED}>{DATE_PUBLISHED}</time> &nbsp;|&nbsp; LithiumGit Team &nbsp;|&nbsp; 4 min read</p>
                </div>

                <p className="blog-intro">
                    A branch is not always the fastest way to share work. When your changes are local, unfinished, or too
                    small for a pull request, a <strong>git patch</strong> is a clean handoff: one file, reviewable diff,
                    no remote branch required. LithiumGit makes the same flow visual with import and export actions.
                </p>

                <section className="blog-section">
                    <h2>When a Patch Is the Smart Move</h2>
                    <div className="concept-box">
                        <strong>Use a patch</strong>
                        For uncommitted fixes, quick reviews, debugging handoffs, code experiments, or changes that should
                        not be pushed to the shared remote yet.
                    </div>
                    <p>
                        Do not use patches as a replacement for pull requests. Use them when you need a lightweight way to
                        transfer a local diff before the work becomes permanent team history.
                    </p>
                </section>

                <section className="blog-section">
                    <h2>Git CLI: Export and Apply Local Changes</h2>
                    <div className="cli-block">
                        <span className="cli-label">Sender</span>
                        <pre>
                            <span className="cli-comment">{`# Export all uncommitted unstaged local changes to a patch file`}</span>{`
`}<span className="cli-comment">{`# --binary includes binary files as well (png, jpg, pdf, etc.)`}</span>{`
`}<span className="cli-cmd">{`git diff HEAD --binary > changes.patch`}</span>{`

`}<span className="cli-comment">{`# Export unstaged changes only, if needed`}</span>{`
`}<span className="cli-cmd">{`git diff --binary > changes.patch`}</span>
                        </pre>
                    </div>
                    <div className="cli-block">
                        <span className="cli-label">Receiver</span>
                        <pre>
                            <span className="cli-comment">{`# Apply the patch to the working tree`}</span>{`
`}<span className="cli-cmd">{`git apply --binary changes.patch`}</span>
                        </pre>
                    </div>
                </section>

                <section className="blog-section">
                    <h2>LithiumGit: Export Changes Visually</h2>
                    <p>
                        In LithiumGit, open the import/export changes action, choose the files you want to share, then
                        save them as a patch file. Your teammate can import the same file into their working copy.
                    </p>
                    <div className="blog-image-row">
                        <div className="blog-image-block">
                            <img src={importExportAction.src} alt="LithiumGit import and export changes action" />
                            <p className="image-caption">Open Import/Export Changes</p>
                        </div>
                        <div className="blog-image-block">
                            <img src={savePatch.src} alt="Saving local changes as a patch file in LithiumGit" />
                            <p className="image-caption">Save selected changes as a patch and send it to your teammate</p>
                        </div>
                    </div>
                    <div className="blog-image-block">
                        <img src={selectPatchFile.src} alt="Selecting a patch file to import in LithiumGit" />
                        <p className="image-caption">Teammate selects the patch file and imports it</p>
                    </div>
                </section>

                <section className="blog-section">
                    <h2>Patch vs Branch: Quick Decision</h2>
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Use Case</th>
                                <th>Best Choice</th>
                                <th>Why</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Quick local review</td>
                                <td>Patch</td>
                                <td>No remote branch noise</td>
                            </tr>
                            <tr>
                                <td>Production-ready feature</td>
                                <td>Branch + PR</td>
                                <td>Review, CI, and history</td>
                            </tr>
                            <tr>
                                <td>Debugging a teammate issue</td>
                                <td>Patch</td>
                                <td>Fast transfer of the exact diff</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="tip-box">
                        <span className="tip-label">Smart rule</span>
                        Patch for temporary collaboration. Branch for permanent collaboration.
                    </div>
                </section>

                <section className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <dl>
                        {[
                            {
                                q: "How do I share local changes without committing?",
                                a: "Run git diff > changes.patch, send the patch file, and ask your teammate to run git apply changes.patch."
                            },
                            {
                                q: "Does a patch include untracked files?",
                                a: "Not by default. Add the file to Git first with git add -N path/to/file, or create a separate patch after staging it."
                            },
                            {
                                q: "Should I use git patch or push a branch?",
                                a: "Use a patch for temporary, local, or experimental work. Push a branch when the work needs normal review, CI, and long-term history."
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
