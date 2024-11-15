import P from 'prop-types';
import { Link } from 'react-router-dom';
import { search } from '../../../context/searchContext';
import { useContext } from 'react';

function BookSearch({ book }) {
  const { setValue } = useContext(search);

  return (
    <Link
      to={`/book/${book.id}/${book.writerId}`}
      className="hover:ring-2 hover:ring-slate-500 font-mulish text-lg p-2 border border-gray-300 rounded-sm flex items-center w-full h-12"
      onClick={() => setValue(true)}
    >
      {book.title}
    </Link>
  );
}
BookSearch.propTypes = {
  book: P.shape({
    id: P.number,
    writerId: P.number,
    title: P.string,
  }),
};
export default BookSearch;
