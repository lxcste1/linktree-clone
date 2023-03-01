import { notFound } from 'next/navigation';
import api from '../api/api';

type Props = {
    params: {
        slug: string
    }
}

export default async function Slug({params: {slug}}: Props) {
  const users = await api.user.list();

  const user = users.find((user) => user.slug === slug);

  if (!user) {
    return notFound();
  }

  const links = await api.links.fetch(user.url);

  return (
    <>
      <main>
        <h1>{user.slug}</h1>
        <ul>
          {links.map((link) => (
            <li key={link.url}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
