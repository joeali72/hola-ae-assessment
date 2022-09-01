import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/layout';
const NotFoundPage = lazy(() => import('pages/notFount'));
const Loader = lazy(() => import('components/utils/loader'));
const SearchPage = lazy(() => import('pages/search/index.page'));

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <SearchPage />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
