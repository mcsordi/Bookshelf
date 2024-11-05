import P from 'prop-types';
import { Link } from 'react-router-dom';
function Books({ book, size }) {
  return (
    <Link to={`/book/${book.id}`}>
      <div>
        <img
          className={`${size} rounded-md border border-slate-400`}
          src={`https://m.media-amazon.com/images/I/${book.bookImg}`}
          alt={book.title}
        />
      </div>
    </Link>
  );
}
Books.propTypes = {
  book: P.shape({
    bookImg: P.string.isRequired,
    title: P.string,
    id: P.number,
  }).isRequired,
  size: P.string,
};
export default Books;
