import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './styles.scss';

interface PostCardProps {
  id?: any;
  coverImage?: string;
  width?: number;
  height?: number;
  title?: string;
  excerpt?: string;
  slug?: string;
  category?: any;
  author?: string;
  avatar?: string;
  date?: string;
  time?: string;
}

export default function PostCard({
  id,
  coverImage,
  width,
  height,
  title,
  excerpt,
  date,
  time,
  category,
  slug,
  author,
  avatar,
}: PostCardProps) {
  return (
    <div className='post-card-item'>
      <LazyLoadImage
        className='post-card-coverImage'
        src={coverImage}
        alt={title}
        effect='blur'
      />
      <div className='post-card-content'>
        <h2 className='post-card-title'>{title}</h2>
        <p className='post-card-excerpt'>{excerpt}</p>
        <Link className='post-card-link' to={`post/${slug}`}>
          More {'->'}
        </Link>
      </div>
    </div>
  );
}
