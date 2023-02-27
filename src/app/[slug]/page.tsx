import api from '../api/api';

type Props = {
    params: {
        slug: string
    }
}

export default async function Slug({params: {slug}}: Props) {
  const links = await api.links.fetch();

  return (
    <>
      <main>
        <h1>lxcste</h1>
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
