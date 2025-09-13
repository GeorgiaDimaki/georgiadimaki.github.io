import styles from './Section.module.css';

export function Section({ id, minHeight, backgroundColor, children }) {
  const sectionStyle = {
    backgroundColor: backgroundColor || 'transparent',
    minHeight: minHeight || '100vh',
  };

  return (
    <section id={id} className={styles.section} style={sectionStyle}>
      <div className={styles.inner}>
        {children}
      </div>
    </section>
  );
}