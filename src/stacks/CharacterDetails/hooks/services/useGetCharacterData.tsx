import {useQuery} from '@tanstack/react-query';
import {getCharacterData} from '../../../../api/services/RAMService';
import {Character} from '../../../../types';

export const useGetCharacterData = (id: number) => {
  const {data, isLoading} = useQuery<Character>({
    queryKey: ['character', id],
    queryFn: () => getCharacterData(id),
  });

  return {data, isLoading};
};
