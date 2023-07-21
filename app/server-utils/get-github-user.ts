import { Octokit } from 'octokit';

export async function getGitHubUser(token: string) {
  return new Octokit({ auth: token })
    .request('GET /user', {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
    .catch((e) => {});
}
