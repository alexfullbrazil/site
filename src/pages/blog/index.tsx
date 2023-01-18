import { useGetPostsQuery } from '../../generated/graphql';
import PostCard from '../../components/post-card';

import '../../components/post-card/styles.scss';

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
      {/* <ul>
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
      </ul> */}
      <div className='post-card-wrapper'>
        {dataPosts?.posts?.map((post) => {
          return (
            <PostCard
              key={post.id}
              title={post.title}
              slug={post.slug || undefined}
              excerpt={post.excerpt || undefined}
              coverImage={post.coverImage?.url}
            />
          );
        })}
      </div>
    </>
  );
}
