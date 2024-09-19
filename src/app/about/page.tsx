export default function About(){
    return (
        <main className="px-5 pt-3">
            <div className="px-5">
                <h3>About LithiumGit</h3>
                <p>LithiumGit is a Git client or GUI application which provide a user friendly interface 
                    to perform git related functionalities graphically.
                </p>
                <p>LithiumGit is origin independent application. That means it can be used for any git project having any origin platform such as <a className="text-primary" target="_blank" href="https://github.com">Github</a>, <a className="text-primary" target="_blank" href="https://about.gitlab.com">GitLab</a>, <a className="text-primary" target="_blank" href="https://bitbucket.org">BitBucket</a>, 
                <a className="text-primary" target="_blank" href="https://gerrithub.io">Gerrit</a> or others.
                The most useful feature of LithiumGit which a user may find is the graph view. In graph view the overall state
                of change history can be viewed. From the graph view user can easily view the changes of any commit, do merge, rebase, cherry-pick, create branch and more other functionalities.
                </p>
                <p>LithiumGit does not execute any git process itself. It uses the installed git on user computer to perform the tasks.
                    So git installation is required to use LithiumGit.
                </p>
                <p>Registration or login is not required to use LithiumGit. It is open source and free. The <a className="text-primary" target="_blank" href="https://github.com/TulshiDas39/LithiumGit">source code</a> is available at Github and contribution is welcomed.</p>
                <br />

                <h3>How to Contribute</h3>
                <p>To integrate any new changes or bug fixing to LithiumGit please submit a <a className="text-primary" href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request">pull request</a> to Github <a className="text-primary" target="_blank" href="https://github.com/TulshiDas39/LithiumGit">repository</a>.</p>

                <br />
                <h3>Background</h3>
                <p>The author of LithiumGit started development this project at jun, 2021 for personal use.
                    By continuous development it has become a real life application and published for all as open source.
                </p>

            </div>
            {/* <div style={{height:400}} /> */}
            
        </main>
    )
}