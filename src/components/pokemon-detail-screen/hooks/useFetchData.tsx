import {getPokemonDetails} from 'services/pokemon';
import {useEffect, useState} from 'react';

const useFetchData = (name: string) => {
  const [data, setData] = useState<PokemonDetailData | null>(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await getPokemonDetails(name);
      setData(res);
    } catch (error) {
      console.warn(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();

    return () => {
      setData(null);
      setLoading(false);
    };
  }, []);

  return {
    data,
    loading,
    getData,
  };
};

export default useFetchData;
