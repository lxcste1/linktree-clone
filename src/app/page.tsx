import api from './api/api';
import Link from 'next/link';

export default async function Home() {
  const users = await api.user.list();

  return (
    <>
      <main>
        <h1>lxcste</h1>
        <ul>
          {users.map((user) => (
            <li key={user.url}>
              <Link href={`/${user.url}`}>{user.slug}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
