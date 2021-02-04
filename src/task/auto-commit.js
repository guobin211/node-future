const child_process = require('child_process');

function getCommitMessage() {
  const date = new Date();
  const message =
`feature(support): QCI更新支持中心CMS

time: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}
`;
  console.log(message);
  return message;
}

function createCommit() {
  const cp = child_process.spawnSync('git', ['commit', '-am', getCommitMessage()]);
  console.log(cp.stdout.toString());
  child_process.spawnSync('git', ['push']);
}


createCommit();
