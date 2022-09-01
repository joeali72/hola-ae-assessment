import { lazy, Suspense } from 'react';
const Loader = lazy(() => import('components/utils/loader'));
const SearchSection = lazy(() => import('./components/searchSecton'));

export default function SearchScreen() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <SearchSection />
      </Suspense>
    </>
  );
}
