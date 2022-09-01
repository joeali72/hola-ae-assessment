import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { searchSchema } from '../schema/search.schema';
import { TSearchFormData } from 'types/search.types';
import { ChangeEvent, useState } from 'react';
import api from 'services/api-service';
import { useAppDispatch } from 'app/hooks';
import { getUsers } from 'app/users/userSlice';
import { getRepo } from 'app/repo/repoSlice';

export default function useSearch() {
  const [typeValue, setTypeValue] = useState<string>('1');
  const [queryValue, setQueryValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const formOptions = {
    defaultValues: {
      query: '',
      type: '1',
    },
    resolver: yupResolver(searchSchema),
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TSearchFormData>(formOptions);

  async function fetchUsers(query: string) {
    try {
      const { data } = await api.get(`search/users?q=` + query);
      dispatch(getUsers({ users: data?.items }));
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchRepo(query: string) {
    try {
      const { data } = await api.get(`search/repositories?q=` + query);
      dispatch(getRepo({ repos: data?.items }));
    } catch (err) {
      console.error(err);
    }
  }

  function changeTypeHanlder(event: ChangeEvent<HTMLSelectElement>) {
    const typeVal = event.currentTarget.value;
    setTypeValue(typeVal);
    dispatch(getRepo({ repos: [] }));
    dispatch(getUsers({ users: [] }));
    if (queryValue.length < 3) {
      event.preventDefault();
    }
    if (queryValue.length >= 3) {
      if (typeVal === '1') {
        fetchUsers(queryValue);
      }
      if (typeVal === '2') {
        fetchRepo(queryValue);
      }
    }
  }

  function changeQueryHandler(event: ChangeEvent<HTMLInputElement>) {
    const queryVal = event.currentTarget.value;
    setQueryValue(queryVal);
    dispatch(getRepo({ repos: [] }));
    dispatch(getUsers({ users: [] }));
    if (queryVal.length >= 3) {
      if (typeValue === '1') {
        fetchUsers(queryVal);
      }
      if (typeValue === '2') {
        fetchRepo(queryVal);
      }
    }
  }

  const onSubmit = handleSubmit((data) => console.log(data));

  return { register, errors, changeQueryHandler, changeTypeHanlder, onSubmit };
}
