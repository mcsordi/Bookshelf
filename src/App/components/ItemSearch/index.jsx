import P from 'prop-types';
import { Link } from 'react-router-dom';
import { search } from '../../context/searchContext';
import { useContext } from 'react';

function ItemSearch({ item }) {
  const { setValue } = useContext(search);

  return (
    <Link to={`/book/${item.id}/${item.writerId} `}>
      <div
        className="last:mb-1 border border-gray-300 rounded-sm mt-1 flex items-center p-2 w-full h-12"
        onClick={() => setValue(true)}
      >
        {item.title}
      </div>
    </Link>
  );
}
ItemSearch.propTypes = {
  item: P.shape({
    id: P.number,
    writerId: P.number,
    title: P.string,
  }),
};
export default ItemSearch;
