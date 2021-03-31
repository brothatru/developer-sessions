import React from 'react';
import styles from './CoolSection.module.css';

const observerOptions: IntersectionObserverInit = {
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    console.log('intersected!');

    entry.target.classList.add(`${styles['fade-in']}`);

    entry.target
      .querySelector('li:nth-of-type(1)')
      ?.classList.add(`${styles['slide-in-from-left']}`);

    entry.target
      .querySelector('li:nth-of-type(2)')
      ?.classList.add(`${styles['slide-in-from-right']}`);

    entry.target
      .querySelector('li:nth-of-type(3)')
      ?.classList.add(`${styles['slide-in-from-bottom']}`);

    observer.unobserve(entry.target);
  });
}, observerOptions);

export const CoolSection = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current!);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={`${styles['cool-section-container']} ${styles.hidden}`} ref={ref}>
      <h2>Section 5</h2>
      <ul>
        <li className={`${styles['hidden-left']}`}>
          List Item 1 (should slide in from the left)
        </li>
        <li className={`${styles['hidden-right']}`}>
          List Item 2 (should slide in from the right)
        </li>
        <li className={`${styles['hidden-bottom']}`}>
          List Item 3 (should slide in from the bottom)
        </li>
      </ul>
    </section>
  );
};
