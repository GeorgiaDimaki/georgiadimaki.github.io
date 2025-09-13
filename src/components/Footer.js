import styles from './Footer.module.css';

export function Footer({ socials }) {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        {socials.map((social) => (
          <li key={social.name}>
            <a href={social.url} target="_blank" rel="noopener noreferrer">
              {social.name}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}