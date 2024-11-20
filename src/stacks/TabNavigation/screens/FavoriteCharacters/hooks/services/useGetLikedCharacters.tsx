import {useQuery} from '@tanstack/react-query';
import {getLikedCharacters} from '../../../../../../api/services/RAMService';
import {Character} from '../../../../../../types';

export const useGetLikedCharacters = (ids: string[]) => {
  const {data, isLoading} = useQuery<Character[] | Character>({
    queryKey: ['liked_characters', ids],
    queryFn: () => getLikedCharacters(ids),
    initialData: [],
  });

  return {data, isLoading};
};
