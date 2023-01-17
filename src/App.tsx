import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
const Home = lazy(() => import('./pages/home'));
const Blog = lazy(() => import('./pages/blog'));
const Post = lazy(() => import('./pages/blog/post'));
const NotFound = lazy(() => import('./pages/not-found'));

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<h1 className='container'>Loading...</h1>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog/post/:slug' element={<Post />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
