import { lazy, Suspense } from 'react';
import { Container } from 'react-bootstrap';
import Results from '../results';
const SearchForm = lazy(() => import('../searchForm'));
const Loader = lazy(() => import('components/utils/loader'));

export default function SearchSection() {
  return (
    <section>
      <Container>
        <Suspense fallback={<Loader />}>
          <SearchForm />
          <Results />
        </Suspense>
      </Container>
    </section>
  );
}
