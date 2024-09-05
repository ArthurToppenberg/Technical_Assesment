import Head from 'next/head';
import styles from '../styles/admin.module.css';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Admin</title>
        <meta name="description" content="HomePage" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.heading}>ADMIN</h1>
      </div>
    </>
  );
};

export default Home;
