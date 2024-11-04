import { useState } from 'react';
import Header from './App/components/Header';
import RenderBooks from './App/components/RenderBooks';
import RenderCategories from './App/components/RenderCategories';
import { useFetch } from './utils/useFetch';

function App() {
  const { data, loading, error } = useFetch([
    process.env.REACT_APP_HIGHLIGHTS,
    process.env.REACT_APP_BOOKS,
    process.env.REACT_APP_CATEGORIES,
  ]);
  const [target, setTarget] = useState('Finanças');
  const highlights = data[0];
  const books = data[1];
  const categories = data[2];

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  const filterBooks = books.filter((book) => book.category == target && book);
  return (
    <section className="bg-slate-200 h-screen w-full">
      <Header />
      <RenderBooks display={'flex'} data={highlights} />
      <RenderCategories target={target} setTarget={setTarget} data={categories} />
      <RenderBooks display={'hidden'} data={filterBooks} />
    </section>
  );
}

export default App;
