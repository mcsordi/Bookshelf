import P from 'prop-types';
import { Link } from 'react-router-dom';

function WriterSearch({ item }) {
  return (
    <Link
      to={`/writer/${item.writerId}`}
      className="hover:ring-2 hover:ring-slate-500 font-mulish text-lg border border-gray-300 rounded-sm
      flex items-center p-2 w-full h-12"
      onClick={() => console.log(item.writer)}
    >
      {item.writer}
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
