import { Link } from 'react-router-dom';

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
      <img className='post-card-coverImage' src={coverImage} alt={title} />
      <h2 className='post-card-title'>{title}</h2>
      <p className='post-card-excerpt'>{excerpt}</p>
      <Link className='post-card-link' to={`post/${slug}`}>
        More {'->'}
      </Link>
    </div>
  );
}
