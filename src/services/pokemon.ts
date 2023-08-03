import interceptor from "./interceptor";

export const getPokemonList = async (url: string = 'https://pokeapi.co/api/v2/pokemon?limit=8') => {
  try {
    const res = await interceptor.get(url)
    return res.data;
  } catch (error) {
    console.warn(error);
    return null;
  }
}

export const getPokemonDetails = async (name: string) => {
  try {
    const res = await interceptor.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    return res.data;
  } catch (error) {
    console.warn(error);
    return null;
  }
}