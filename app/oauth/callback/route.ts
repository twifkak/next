import { exchangeCodeForToken } from '@/app/server-utils/exchange-code-for-token';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const data = await exchangeCodeForToken(searchParams.get('code')!).then((res) => res.json());

  if (data && data['access_token']) {
    cookies().set('github_access_token', data['access_token']);
  }

  redirect('http://localhost:3000/');
}
