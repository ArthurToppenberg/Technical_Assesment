import Head from 'next/head';
import styles from '../styles/index.module.css';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="HomePage" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.heading}>HOME</h1>
      </div>
    </>
  );
};

export default Home;
