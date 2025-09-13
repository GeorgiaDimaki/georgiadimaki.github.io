import { Section } from './Section';
import styles from './Skills.module.css';

export function Skills({ skills }) {
  return (
    <Section id="skills" backgroundColor="var(--color-two)">
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.grid}>
        {skills.map((skillCategory) => (
          <div key={skillCategory.category} className={styles.category}>
            <h3>{skillCategory.category}</h3>
            <ul>
              {skillCategory.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}