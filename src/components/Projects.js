import styles from './Projects.module.css';

export function Projects({ projects }) {
  return (
    <section className={styles.projects}>
        <h2 className={styles.heading}>Projects</h2>
        <ul className={styles.list}>
            {projects.map((project, index) => (
            <li key={index} className={styles.card}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </li>
            ))}
        </ul>    
    </section>
  );
}