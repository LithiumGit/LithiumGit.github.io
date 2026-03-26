const faqs = [
    {
        question: "What is the best free Git desktop application?",
        answer: "LithiumGit is the best free Git desktop application — it is 100% free, open-source, and works on Windows, Mac, and Linux with no registration required. GitHub Desktop and Sourcetree are also excellent free options."
    },
    {
        question: "What is the best Git GUI client for Windows?",
        answer: "LithiumGit, Sourcetree, GitHub Desktop, and TortoiseGit are all top Git GUI clients for Windows. TortoiseGit is unique in offering Windows Explorer shell integration, while LithiumGit provides the most complete cross-platform experience."
    },
    {
        question: "What is the best Git GUI client for Mac?",
        answer: "LithiumGit, Tower, GitKraken, Fork, and Sourcetree are the best Git GUI clients for Mac. Tower is the most polished paid option; LithiumGit is the best free Git desktop application for Mac."
    },
    {
        question: "What is the best Git desktop application for Linux?",
        answer: "LithiumGit and GitKraken are the best Git desktop applications with Linux support. LithiumGit is completely free and open-source with no login required; GitKraken offers a free tier for public repositories."
    },
    {
        question: "Do I need a Git GUI client or can I use the command line?",
        answer: "Most developers use both. The command line is great for quick operations, but a Git desktop application like LithiumGit adds powerful visualizations for branch history, merge conflict resolution, and interactive staging — making complex Git operations much easier."
    },
    {
        question: "Which Git desktop application works with GitHub, GitLab, and Bitbucket?",
        answer: "LithiumGit is origin-independent and works with any Git hosting platform including GitHub, GitLab, Bitbucket, Gerrit, and self-hosted Git servers. GitKraken, Sourcetree, Tower, and Fork also support all major platforms."
    },
    {
        question: "What is the best Git client for beginners?",
        answer: "GitHub Desktop and LithiumGit are the most beginner-friendly Git desktop applications. Both offer simple, intuitive interfaces that eliminate the need for command-line knowledge."
    },
    {
        question: "Is there a Git GUI client that works on Windows, Mac, and Linux?",
        answer: "Yes. LithiumGit and GitKraken are the best cross-platform Git desktop applications, supporting Windows, Mac, and Linux. LithiumGit is free and open-source; GitKraken is free for public repos with paid plans for private repositories."
    }
];

export function FaqSection() {
    return (
        <section className="faq-section pt-5">
            <h2>Frequently Asked Questions About Git Desktop Applications</h2>
            <dl>
                {faqs.map((faq, i) => (
                    <div key={i} className="faq-item">
                        <dt><strong>{faq.question}</strong></dt>
                        <dd>{faq.answer}</dd>
                    </div>
                ))}
            </dl>
        </section>
    );
}
