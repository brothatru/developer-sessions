import React from 'react';
import './App.css';
import { Section } from './components/Section';
import logo from './logo.svg';

function App() {
  const section1Ref = React.useRef(null);
  const section2Ref = React.useRef(null);
  const section3Ref = React.useRef(null);
  const section4Ref = React.useRef(null);
  const section5Ref = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        console.log('entries', entries);
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const sectionTitle = entry.target.querySelector('h2')?.textContent;
          console.log(`${sectionTitle} isIntersecting`, true);

          switch (sectionTitle) {
            case 'Section 1':
              entry.target.classList.add('slide-in-from-left');
              observer.unobserve(entry.target);
              break;

            case 'Section 2':
              entry.target.classList.add('slide-in-from-right');
              observer.unobserve(entry.target);
              break;

            case 'Section 3':
              entry.target.classList.add('slide-in-from-bottom');
              observer.unobserve(entry.target);
              break;
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -500px 0px',
      },
    );

    observer.observe(section1Ref.current!);
    observer.observe(section2Ref.current!);
    observer.observe(section3Ref.current!);
    observer.observe(section4Ref.current!);
    observer.observe(section5Ref.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <Section title='Section 1' ref={section1Ref} />
      <Section title='Section 2' ref={section2Ref} />
      <Section title='Section 3' ref={section3Ref} />
      <Section title='Section 4' ref={section4Ref} />
      <Section title='Section 5' ref={section5Ref} />
    </div>
  );
}

export default App;
