import styles from '../page.module.css'
import { notFound } from 'next/navigation';
import api from '../api/api';
import Image from 'next/image'
import userImg from '../../../public/portfolio-image.jpg'

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
        <div className={styles.container}>
          <div className={styles.userInfo__container}>
            <Image 
              src={userImg}                  //una vez que haya impactado la DB (Google Sheets), tomar imagen desde ahí
              alt="Icono del usuario"
              width={100}
              height={100}
              priority={true}
              className={styles.userInfo__image}
            />
            <h1 className={styles.userInfo__title}>{user.slug}</h1>
          </div>
          <div className={styles.userLinks__container}>
            <ul>
              {links.map((link) => (
                <li className={styles.userLinks__item} key={link.url}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}
