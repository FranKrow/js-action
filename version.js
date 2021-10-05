const core = require('@actions/core');
const github = require('@actions/github');

const run = async () =>  {
    core.info("Setting the input and env variables");

    const root = process.env.GITHUB_WORKSPACE;
    const tag = (process.env.GITHUB_REF).replace('refs/tags/', '');
    const files = core.getInput("files").replace(" ","").split(",");
    const regex = new RegExp(core.getInput("version-regexp"));
    const token = core.getInput('repo-token');

    const octokit = github.getOctokit(token);
    const { owner, repo } = github.context.repo;

    const release = await octokit.repos.getReleaseByTag({ owner, repo, tag });

    console.log(`root ${root}`);
    console.log(`files ${files}`);
    console.log(`regex ${regex}`);
    console.log(`token ${token}`);
    console.log(`release ${release}`);

}

run()
    .then(() => core.info("Files updated"))
    .catch(error => core.setFailed(error.message));