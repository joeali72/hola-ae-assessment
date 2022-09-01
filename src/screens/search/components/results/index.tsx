import { lazy, Suspense } from 'react';
import { Col, Row } from 'react-bootstrap';
import useResults from 'screens/search/hooks/useResults';
const UserCard = lazy(() => import('components/utils/card/user.card'));
const RepoCard = lazy(() => import('components/utils/card/repo.card'));
const Loader = lazy(() => import('components/utils/loader'));

export default function Results() {
  const { users, repos } = useResults();

  return (
    <div className="py-4">
      <Row>
        {users.length > 0 &&
          users?.map((user) => {
            return (
              <Col key={user?.id} sm={6} md={4} lg={3} className="mb-5">
                <Suspense fallback={<Loader />}>
                  <UserCard
                    src={user?.avatar_url}
                    userNmae={user?.login}
                    profileLink={user?.url}
                    reposLink={user?.repos_url}
                  />
                </Suspense>
              </Col>
            );
          })}

        {repos.length > 0 &&
          repos?.map((repo) => {
            return (
              <Col key={repo?.id} sm={6} md={4} lg={3} className="mb-5">
                <Suspense fallback={<Loader />}>
                  <RepoCard
                    src={repo?.owner?.avatar_url}
                    userNmae={repo?.owner?.login}
                    profileLink={repo?.owner?.url}
                    reposLink={repo?.url}
                    description={repo?.description}
                  />
                </Suspense>
              </Col>
            );
          })}
      </Row>
    </div>
  );
}
