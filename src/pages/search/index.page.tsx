import { lazy, Suspense } from 'react';
const SearchScreen = lazy(() => import('screens/search/index.screen'));
const Loader = lazy(() => import('components/utils/loader'));

export default function SearchPage() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <SearchScreen />
      </Suspense>
    </>
  );
}
