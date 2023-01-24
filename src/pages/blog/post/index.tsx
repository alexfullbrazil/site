import { useGetPostQuery } from 'gql/types';
import { useParams } from 'react-router-dom';
import NotFound from 'pages/not-found';

export default function Post() {
  const { slug } = useParams();

  const {
    data: dataPost,
    loading,
    error,
  } = useGetPostQuery({
    variables: {
      where: {
        slug: slug,
      },
    },
  });

  if (loading) return <h2>Loading...</h2>;
  if (dataPost?.post === null) return <NotFound />;

  return (
    <>
      <h1>{dataPost?.post?.title}</h1>
      <p>{dataPost?.post?.excerpt}</p>
      <img src={dataPost?.post?.coverImage?.url} alt='' />
      <div
        dangerouslySetInnerHTML={{ __html: dataPost?.post?.content.html || '' }}
      />
    </>
  );
}
