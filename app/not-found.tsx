import { FC } from 'react';
import Link from 'next/link';

const NotFound: FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          style={styles.svg}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
          />
        </svg>
      </div>
      <p style={styles.paragraph}>Sorry, the page you are looking for does not exist.</p>
      <Link href="/" style={styles.link}>
        Go back to Fabian Roeben's website
      </Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
  icon: {
    marginBottom: '1rem',
  },
  svg: {
    width: '50px',
    height: '50px',
    color: '#b91c1c',
  },
  paragraph: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
  },
  link: {
    fontSize: '1rem',
    color: '#b91c1c',
    textDecoration: 'none',
    border: '1px solid #b91c1c',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  },
};

export default NotFound;