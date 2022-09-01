import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import githubLogo from 'assets/logo.png';
import { Container } from 'react-bootstrap';
const Loader = lazy(() => import('components/utils/loader'));
const Image = lazy(() => import('components/utils/image'));

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <Container>
          <div className="navbar_box">
            <Link to="/" className="navbar_box_logo img_block">
              <Suspense fallback={<Loader />}>
                <Image src={githubLogo} alt="Github" />
              </Suspense>
            </Link>
            <div className="navbar_box_body">
              <h3 className="navbar_box_body_title">Github Searcher</h3>
              <p className="navbar_box_body_text">
                Search users or repositories below
              </p>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  );
}
