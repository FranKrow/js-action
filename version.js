const core = require('@actions/core');
const github = require('@actions/github');

const run = async () =>  {
    core.info("Setting the input and env variables");

    const root = process.env.GITHUB_WORKSPACE;
    const file = core.getInput("files").replace(" ","").split(",");

    console.log(`root ${root}`);

    console.log(`file ${file}`);
}