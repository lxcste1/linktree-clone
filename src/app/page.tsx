import api from './api/api';

export default async function Home() {

  const links = await api.links.fetch();

  console.log(links)

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
