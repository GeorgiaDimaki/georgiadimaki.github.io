import styles from './About.module.css';

export function About({ bio }) {
    return (
        <section className={styles.about}>
        <h2 className={styles.heading}>About</h2>
        <p className={styles.bio}>{bio}</p>
        </section>
    );
}