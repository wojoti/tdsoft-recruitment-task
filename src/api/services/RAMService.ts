export const getCharacters = async (name: string, pageParam = 1) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${pageParam}&name=${name}`,
  );
  const data = await response.json();
  return data;
};

export const getCharacterData = async (id: number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
  );
  const data = await response.json();
  return data;
};
