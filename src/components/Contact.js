import { Section } from './Section';
import styles from './Contact.module.css';
import * as Icons from 'react-icons/fa';

export function Contact({ email, socials }) {
  return (
    <Section id="contact" minHeight="auto" backgroundColor="var(--color-three)">
        <div className={styles.wrapper}>
            <h2 className={styles.heading}>Contact Me</h2>
            <a className={styles.email} href={"mailto:"+email} target="_blank" rel="noopener noreferrer">
                {email}
            </a>
            <ul className={styles.socials}>
                {socials.map((social) => {
                    const IconComponent = Icons[social.icon];
                    return (
                        <li key={social.name}>
                            <a href={social.url} target="_blank" rel="noopener noreferrer">
                            <IconComponent />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    </Section>
  );
}