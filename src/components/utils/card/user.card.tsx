import { lazy, Suspense } from 'react';
import { Col, Row } from 'react-bootstrap';
import { TUserCard } from 'types/card.types';
import styles from './userCard.module.scss';
const Image = lazy(() => import('../image'));
const Loader = lazy(() => import('../loader'));

export default function UserCard({
  src,
  userNmae,
  profileLink,
  reposLink,
}: TUserCard) {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <Suspense fallback={<Loader />}>
          <Image src={src} alt={userNmae} />
        </Suspense>
        <h5 className={styles.card_header_title}>{userNmae}</h5>
      </div>
      <div className={styles.card_body}>
        <Row>
          <Col>
            <div>
              <a
                href={profileLink}
                target="_blank"
                rel="noreferrer"
                className={styles.card_body_link}
              >
                View Profile
              </a>
            </div>
          </Col>
          <Col>
            <div>
              <a
                href={reposLink}
                target="_blank"
                rel="noreferrer"
                className={styles.card_body_link}
              >
                view Repos
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
