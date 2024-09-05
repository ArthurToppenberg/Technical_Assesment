import { useEffect, useState } from 'react';
import Head from 'next/head';
import styles from '../styles/dashboard.module.css';
import HeadBar from '@/components/headerbar';
import List from '@/components/list';
import { getLawsProps, LawStatus } from './api/getLaws';
import { Laws_English_Data } from './api/getLaws';

/**
 * Gets laws data from the API.
 * @param getLawsType interface for defining which laws to get.
 * @returns promise of an array of Law_Danish_Paramiters
 */
async function getLaws(getLawsType: getLawsProps): Promise<Laws_English_Data[]> {
  return fetch('/api/getLaws', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(getLawsType),
  }).then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}

const Home: React.FC = () => {
  const [fremsatData, setFremsatData] = useState<Laws_English_Data[]>([]);
  const [vedtagetData, setVedtagetData] = useState<Laws_English_Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data for each list with appropriate parameters
        const fremsat = await getLaws({ LawStatusType: LawStatus.Forkastet });
        const vedtaget = await getLaws({ LawStatusType: LawStatus.Vedtaget });

        // Set data for each list
        setFremsatData(fremsat);
        setVedtagetData(vedtaget);

      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Optional loading state
  }

  if (error) {
    return <p>{error}</p>; // Optional error state
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="HomePage" />
      </Head>
      <HeadBar title="Law Overview" logo="/Folketinget_Logo.png" />
      <div className={styles.container}>
        <List title="Forkastet" data={fremsatData} /> 
        <List title="Vedtaget" data={vedtagetData} />
      </div>
    </>
  );
};

export default Home;
