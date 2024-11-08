import P from 'prop-types';
import { Link } from 'react-router-dom';
import { search } from '../../../context/searchContext';
import { useContext } from 'react';

function BookSearch({ item }) {
  const { setValue } = useContext(search);

  return (
    <Link to={`/book/${item.id}/${item.writerId} `}>
      <div
        className="font-mulish text-lg p-2 border border-gray-300 rounded-sm flex items-center w-full h-12"
        onClick={() => setValue(true)}
      >
        {item.title}
      </div>
    </Link>
  );
}
BookSearch.propTypes = {
  item: P.shape({
    id: P.number,
    writerId: P.number,
    title: P.string,
  }),
};
export default BookSearch;
