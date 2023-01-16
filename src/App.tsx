// import '/src/styles/app.scss';
import { useGetPostsQuery } from './generated/graphql';

function App() {
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
              <img src={item.coverImage?.url} alt={item.title} />
              <div dangerouslySetInnerHTML={{ __html: item.content.html }} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
