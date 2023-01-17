import { Link } from 'react-router-dom';
import { useGetPostsQuery } from '../../generated/graphql';

export default function Blog() {
  const {
    data: dataPosts,
    loading,
    error,
  } = useGetPostsQuery({
    variables: {},
  });

  return (
    <>
      <ul>
        {dataPosts?.posts?.map((item) => {
          return (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.coverImage?.url} alt={item.title} />
              <p>{item.excerpt}</p>
              <Link to={`post/${item.slug}`}>More {'->'}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
