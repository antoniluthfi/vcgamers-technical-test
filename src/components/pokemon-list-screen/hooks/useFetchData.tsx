import {getPokemonList} from 'services/pokemon';
import {useEffect, useState} from 'react';

export type Result = {
  name: string;
  url: string;
};

type Data = {
  count: number;
  next: string;
  previous: string | null;
  results: Result[];
};

const useFetchData = () => {
  const [data, setData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await getPokemonList();
      setData(res);
    } catch (error) {
      console.warn(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGetMoreData = async () => {
    try {
      if (data?.next) {
        const res = await getPokemonList(data?.next);
        setData(prev => ({
          count: res.count,
          next: res.next,
          previous: res.previous,
          results: [...(prev?.results || []), ...res.results],
        }));
      }
    } catch (error) {
      console.warn(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();

    return () => {
      setLoading(false);
    };
  }, []);

  return {
    loading,
    data,
    getData,
    handleGetMoreData,
  };
};

export default useFetchData;
