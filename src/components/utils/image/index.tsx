import { LazyLoadImage } from 'react-lazy-load-image-component';
import { TImageProps } from 'types/image.types';

export default function Image({ height, width, alt, src }: TImageProps) {
  return (
    <div>
      <LazyLoadImage
        height={height}
        width={width}
        alt={alt}
        src={src} // use normal <img> attributes as props
        className="img-fluid"
      />
    </div>
  );
}
