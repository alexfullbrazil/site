import { useGetPostsQuery } from 'gql/types';
import PostCard from 'components/post-card';

import 'components/post-card/styles.scss';
import 'components/post-card/styles.scss';

export default function Blog() {
  const {
    data: dataPosts,
    loading,
    error,
  } = useGetPostsQuery({
    variables: {},
  });

  return (
    <div className='container'>
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
    </div>
  );
}
