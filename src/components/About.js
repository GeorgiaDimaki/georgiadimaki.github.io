import { Section } from './Section';
import { FaDownload } from 'react-icons/fa';
import styles from './About.module.css';

export function About({  name, bio, resumeUrl }) {
    return (
        <Section id="about" backgroundColor="rgba(0, 0, 0, 0.5)">
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.bio}>{bio}</p>
            <div className={styles.buttons}>
                <a href={resumeUrl} download className={styles.button}>
                    RESUME <FaDownload style={{ marginLeft: '8px', fontSize:'10px' }} />
                </a>
            </div>
        </Section>
    );
}