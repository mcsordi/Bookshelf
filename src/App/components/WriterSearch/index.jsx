import P from 'prop-types';
import { Link } from 'react-router-dom';

function WriterSearch({ item }) {
  return (
    <Link to={`/writer/${item.writerId}`}>
      <div
        className="last:mb-1 border border-gray-300 rounded-sm mt-1
flex items-center p-2 w-full h-12"
      >
        {item.writer}
      </div>
    </Link>
  );
}
WriterSearch.propTypes = {
  item: P.shape({
    writerId: P.number,
    writer: P.string,
  }),
};
export default WriterSearch;
