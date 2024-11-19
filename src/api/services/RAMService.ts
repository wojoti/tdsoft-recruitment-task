import {SelectedFilters} from '../../types';

export const getCharacters = async (
  name: string,
  appliedFilters: SelectedFilters,
  pageParam = 1,
) => {
  let filter = '';
  Object.keys(appliedFilters).forEach(el => {
    filter += `&${el}=${appliedFilters[el].toLocaleUpperCase()}`;
  });
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageParam}${
      name?.length ? `&name=${name}` : ''
    }${filter}`,
  );
  const data = await response.json();
  if (data?.error) {
    throw Error;
  }
  return data;
};

export const getCharacterData = async (id: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  );
  const data = await response.json();
  if (data?.error) {
    throw Error;
  }
  return data;
};

export const getLikedCharacters = async (ids: string[]) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${ids}`,
  );
  const data = await response.json();
  if (data?.error) {
    throw Error;
  }
  return data;
};
