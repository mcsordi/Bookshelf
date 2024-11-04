import P from 'prop-types';
function Books({ book }) {
  return (
    <a href="#">
      <div>
        <img
          className="w-22 h-32 rounded-md border border-slate-500"
          src={`https://m.media-amazon.com/images/I/${book.bookImg}`}
          alt={book.title}
        />
      </div>
    </a>
  );
}
Books.propTypes = {
  book: P.shape({
    bookImg: P.string.isRequired,
    title: P.string,
  }).isRequired,
};
export default Books;
