import P from 'prop-types';
import { Link } from 'react-router-dom';
function PosterBook({ book, size, image = '' }) {
  return (
    <Link to={`/book/${book.id}/${book.writerId}`}>
      <div>
        <img
          className={`${size} rounded-md border border-slate-400`}
          src={`${image}/${book.bookImg}`}
          alt={book.title}
        />
      </div>
    </Link>
  );
}
PosterBook.propTypes = {
  book: P.shape({
    bookImg: P.string.isRequired,
    title: P.string,
    id: P.number,
    writerId: P.number,
  }).isRequired,
  size: P.string,
  image: P.string,
};
export default PosterBook;
