import api from 'services/api-service';
import { useQueryWrapper } from 'hooks/use-api-wrapper';
import type { UseQueryResult } from 'react-query';
import type { AxiosError } from 'axios';
import { TUsers } from 'types/search.types';
import { useAppDispatch } from 'app/hooks';
import { getUsers } from 'app/users/userSlice';

const endpoint = 'users';

type ReturnType = UseQueryResult<TUsers, AxiosError>;

export function useGetUsersApi(): ReturnType {
  const dispatch = useAppDispatch();
  const queryFn = async () => {
    const { data } = await api.get(endpoint, {});
    // dispatch(getUsers({ users: data }));
    return data;
  };

  return useQueryWrapper(endpoint, queryFn);
}
