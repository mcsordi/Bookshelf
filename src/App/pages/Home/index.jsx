import { useState } from 'react';
import RenderBooks from '../../components/book/RenderBooks';
import RenderCategories from '../../components/book/RenderCategories';
import { useFetch } from '../../../utils/useFetch';

function Home() {
  const { data, loading, error } = useFetch([
    process.env.REACT_APP_HIGHLIGHTS,
    process.env.REACT_APP_BOOKS,
    process.env.REACT_APP_CATEGORIES,
  ]);

  const [target, setTarget] = useState('Finanças');
  const highlights = data[0];
  const books = data[1];
  const categories = data[2];
  const imageUrl = `https://m.media-amazon.com/images/I`;

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  const filterBooks = books.filter((book) => book.category == target && book);
  return (
    <>
      <RenderBooks image={imageUrl} size={`w-22 h-32`} display={'flex'} data={highlights} />
      <RenderCategories target={target} setTarget={setTarget} data={categories} />
      <RenderBooks image={imageUrl} size={`w-22 h-32`} display={'hidden'} data={filterBooks} />
    </>
  );
}

export default Home;