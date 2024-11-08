import P from 'prop-types';
import { Link } from 'react-router-dom';

function WriterSearch({ item }) {
  return (
    <Link to={`/writer/${item.writerId}`}>
      <div
        className="font-mulish text-lg border border-gray-300 rounded-sm
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
