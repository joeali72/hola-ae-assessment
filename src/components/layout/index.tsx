import { lazy, Suspense } from 'react';
import { TChildrenProps } from 'types/global';
const Header = lazy(() => import('./header'));
const Loader = lazy(() => import('components/utils/loader'));

export default function Layout({ children }: TChildrenProps) {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
      </Suspense>
      {children}
    </>
  );
}
