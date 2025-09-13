import styles from './Header.module.css';

export function Header({name, socials}) {
  return (
    <header className={styles.header}>
      <div className={styles.name}>{name}</div>
      <nav className={styles.nav}>
        <ul>
          {socials.map((social) => (
            <li key={social.name}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}