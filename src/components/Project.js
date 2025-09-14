import styles from './Projects.module.css'; 
export function Project({ project }) {
  return (
    <li className={styles.card}>
        <div className={styles.title_container}> {/* Add this wrapper */}
            {project.logo && (
                <img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className={styles.logo}
                />
            )}
            <h3>{project.title}</h3>
        </div>
        <ul className={styles.technologies}>
            {project.technologies.map((tech) => (
                <li key={tech} className={styles.tech_tag}>
                    {tech}
                </li>
            ))}
        </ul>
        <p>{project.description}</p>
        {project.links.map((link) => (
            <a key={link.title} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.project_button}>
                {link.title}
            </a>
        ))}
    </li>
  );
}