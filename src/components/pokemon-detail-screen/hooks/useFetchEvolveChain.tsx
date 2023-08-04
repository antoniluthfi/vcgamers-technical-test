import {useEffect, useState} from 'react';
import {getEvolvechain} from 'services/pokemon';

const useFetchEvolveChain = (urlSpecies: string) => {
  const [data, setData] = useState<EvolutionChain | null>(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await getEvolvechain(urlSpecies);
      setData(res);
    } catch (error) {
      console.warn(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (urlSpecies) {
      getData();
    }
  }, [urlSpecies]);

  return {
    data,
    loading,
  };
};

export default useFetchEvolveChain;
