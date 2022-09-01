import { useAppSelector } from 'app/hooks';
import { useEffect } from 'react';

export default function useResults() {
  const users = useAppSelector((state) => state.users.users);
  const repos = useAppSelector((state) => state.repos.repos);

  useEffect(() => {}, [users]);
  useEffect(() => {}, [repos]);

  return { users, repos };
}
