import { cookies } from 'next/headers';
import { getGitHubUser } from './server-utils/get-github-user';
import ArrowButton from './arrow-button';

const GitHubLoginButton: React.FC = async () => {
  const token = cookies().get('github_access_token');
  const response = token ? await getGitHubUser(token.value) : null;

  if (!response) {
    return (
      <ArrowButton
        href={`https://github.com/login/oauth/authorize?client_id=${encodeURIComponent('Iv1.36998544bc17c34d')}`}
        title="GitHub Login"
        description="Log into your GitHub account."
      />
    );
  }

  return <ArrowButton href={response.data.html_url} title="GitHub Profile" description="View your GitHub profile." />;
};

export default GitHubLoginButton;
