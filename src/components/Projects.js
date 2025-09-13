import { Section } from './Section';
import { Project } from './Project';
import styles from './Projects.module.css';

export function Projects({ projects }) {
  return (
    <Section id="projects" backgroundColor="var(--color-one)">
        <h2 className={styles.heading}>Projects</h2>
        <ul className={styles.list}>
            {projects.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </ul>    
    </Section>
  );
}