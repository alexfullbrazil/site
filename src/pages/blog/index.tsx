import { useEffect } from 'react';
import { useGetPostsQuery } from '../../generated/graphql';
import { Link, useLocation } from 'react-router-dom';

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
              <p>{item.excerpt}</p>
              {/* <img src={item.coverImage?.url} alt={item.title} />
              <div dangerouslySetInnerHTML={{ __html: item.content.html }} /> */}
              <Link to={`post/${item.slug}`}>More {'->'}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
