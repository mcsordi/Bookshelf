import P from 'prop-types';
import SpreadFetch from '../SpreadFetch';
import BookSearch from '../BookSearch';

function ResponseSearch({ data, text }) {
  return (
    <SpreadFetch data={data}>
      {(book, id) => book.title?.toLowerCase().includes(text) && <BookSearch key={id} book={book} id={id} />}
    </SpreadFetch>
  );
}
ResponseSearch.propTypes = {
  data: P.array,
  text: P.string,
};
export default ResponseSearch;
